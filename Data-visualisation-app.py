import pandas as pd
import plotly.graph_objs as go
from plotly.subplots import make_subplots
import dash
from dash import dcc
from dash import html
import plotly.express as px
from prophet import Prophet

data = pd.read_csv("mon-thur.csv")
df = pd.DataFrame(data, columns=["ds", "R01", "R02", "R03", "R04", "R05", "R06", "R07", "R08", "R09", "R10", "R11", "R12", "R13", "R14", "R15", "R16"])


df["ds"] = pd.to_datetime(df["ds"]) # Convert timestamp to datetime format
df.set_index("ds", inplace=True) # Set timestamp as the index column

years = [2019, 2020, 2021, 2022]
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
times = [f"{i}:00:00" for i in range(24)]
devices = ["R01", "R02", "R03", "R04", "R05", "R06", "R07", "R08", "R09", "R10", "R11", "R12", "R13", "R14", "R15", "R16"]


app = dash.Dash(__name__)


app.layout = html.Div(children=[
html.H1(children="Temperature Data"),
html.Div(children="Select a year, month, time and device to display temperature data."),
dcc.Dropdown(
id="year-dropdown",
options=[{"label": year, "value": year} for year in years],
value=2019,
),
dcc.Dropdown(
id="month-dropdown",
options=[{"label": month, "value": month} for month in months],
value="January",
),
dcc.Dropdown(
id="time-dropdown",
options=[{"label": time, "value": time} for time in times],
value="00:00:00",
),
dcc.Dropdown(
id="device-dropdown",
options=[{"label": device, "value": device} for device in devices],
value="R01",
),
dcc.Graph(id="temperature-graph"),
])
@app.callback(
dash.dependencies.Output("temperature-graph", "figure"),
dash.dependencies.Input("year-dropdown", "value"),
dash.dependencies.Input("month-dropdown", "value"),
dash.dependencies.Input("time-dropdown", "value"),
dash.dependencies.Input("device-dropdown", "value"),
)
def update_figure(year, month, time, device):
# Select data for the desired year, month, time, and device
    start_date = pd.to_datetime(f"{year}-{month}-01 {time}")
    end_date = start_date + pd.offsets.MonthEnd(1)
    df_selected = df.loc[start_date:end_date][device]

# Fit the Prophet model and make predictions
    df_prophet = pd.DataFrame({"ds": df_selected.index, "y": df_selected.values})
    model = Prophet()
    model.fit(df_prophet)
    future = model.make_future_dataframe(periods=7)
    forecast = model.predict(future)

# Create the plotly figure
    fig = make_subplots()

    fig.add_trace(go.Scatter(
    x=df_selected.index,
    y=df_selected.values,
    name="Actual Temperature",
    line=dict(color="red", width=2)
))

    fig.add_trace(go.Scatter(
    x=forecast["ds"],
    y=forecast["yhat"],
    name="Prophet Forecast",
    line=dict(color="blue", width=2)
))

    fig.add_trace(go.Scatter(
    x=forecast["ds"],
    y=forecast["yhat_upper"],
    name="Upper Bound",
    line=dict(color="gray", width=2),
    fill=None,
    mode="lines"
))

    fig.add_trace(go.Scatter(
    x=forecast["ds"],
    y=forecast["yhat_lower"],
    name="Lower Bound",
    line=dict(color="gray", width=2),
    fill="tonexty",
    mode="lines"
))


    fig.update_layout(
    title=f"Temperature Data for {device} - {month} {year}",
    xaxis_title="Date",
    yaxis_title="Temperature (°C)",
    hovermode="x",
    legend=dict(
    x=0,
    y=1,
    traceorder="normal",
    font=dict(
    family="sans-serif",
    size=12,
    color="black"
),
    bgcolor="LightSteelBlue",
    bordercolor="Black",
    borderwidth=2
)
)

    return fig

if __name__ == '__main__':
     app.run(debug=True)