
import pandas as pd
import plotly.graph_objs as go
from plotly.subplots import make_subplots
import dash
from dash import dcc
from dash import html

# Read data from CSV file
df = pd.read_csv('mon-thur.csv')

# Modify the data
df['ds'] = pd.to_datetime(df['ds']) # Convert timestamp to datetime format
df.set_index('ds', inplace=True) # Set timestamp as the index column

# Define available years and times
years = [2019, 2020, 2021, 2022]
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
month_index = {Month: index for index, Month in enumerate(months)}
times = ['00:00:00', '01:00:00', '02:00:00', '03:00:00', '04:00:00', '05:00:00', '06:00:00', '07:00:00', '08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '18:00:00', '19:00:00', '20:00:00', '21:00:00', '22:00:00', '23:00:00']
sensors = ['R01', 'R02', 'R03', 'R04', 'R05', 'R06', 'R07', 'R08', 'R09', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 'R16']

# Define the app
app = dash.Dash(__name__)

# Define the app layout
app.layout = html.Div(children=[
    html.H1(children='Temperature Data'),

    html.Div(children='''
        Select a year and time to display temperature data.
    '''),

    dcc.Dropdown(
        id='year-dropdown',
        options=[{'label': year, 'value': year} for year in years],
        value=2019
    ),

    dcc.Dropdown(
        id='month-dropdown',
        options=[{'label': month, 'value': month} for month in months],
        value='January'
    ),

    dcc.Dropdown(
        id='time-dropdown',
        options=[{'label': time, 'value': time} for time in times],
        value='00:00:00'
    ),

    dcc.Dropdown(
        id='sensor-dropdown',
        options=[{'label': sensor, 'value': sensor} for sensor in sensors],
        value='R01'
    ),

    dcc.Graph(
        id='temperature-graph'
    )
])
time_from = '00:00:00'
time_to = '23:59:59'
# Define the callback to update the graph
@app.callback(
    dash.dependencies.Output('temperature-graph', 'figure'),
    dash.dependencies.Input('year-dropdown', 'value'),
    dash.dependencies.Input('month-dropdown', 'value'),
    dash.dependencies.Input('time-dropdown', 'value'),
    dash.dependencies.Input('sensor-dropdown', 'value')
)
def update_figure(year, month, time, sensor):
    try:
        month_int = int(month)
    except ValueError:
        print(f"Invalid month value: {month}")
    # handle the error, such as by returning a default value or prompting the user to enter a valid month value

    # Select data for the desired year, month, time, and sensor
    start_date = pd.Timestamp(year=int(year), month=month_index[month], day=1, hour=int(time_from.split(":")[0]), minute=int(time_from.split(":")[1]), second=int(time_from.split(":")[2]), tz=None)
    end_date = pd.Timestamp(year=int(year), month=month_index[month], day=12, hour=int(time_to.split(":")[0]), minute=int(time_to.split(":")[1]), second=int(time_to.split(":")[2]), tz=None) + pd.offsets.MonthEnd(12)
    df_range = df.loc[start_date:end_date]
    # Filter data for the selected sensor
    df_sensor = df_range[[sensor]]

    # Resample the data to hourly intervals and calculate the mean temperature for each hour
    hourly_data = df_range.resample('H').mean()

    # Create the figure with subplots
    fig = make_subplots(rows=1, cols=1)

    # Add traces for each temperature sensor
    for col in hourly_data.columns:
        fig.add_trace(go.Scatter(x=hourly_data.index, y=hourly_data[col], name=col))

    # Update the figure layout
    fig.update_layout(
        xaxis_title='Date',
        yaxis_title='Temperature (°C)',
        title=f'Temperature Data for {year} {time}',
    )

    return fig

if __name__ == '__main__':
    app.run_server(debug=True)