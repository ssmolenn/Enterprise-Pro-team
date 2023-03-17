import pandas as pd
import plotly.graph_objs as go
from plotly.subplots import make_subplots
import dash
from dash import dcc
from dash import html
import plotly.express as px

# Read data from CSV file

data = pd.read_csv(
    "mon-thur.csv",
)
df = pd.DataFrame(
    data,
    columns=[
        "ds",
        "R01",
        "R02",
        "R03",
        "R04",
        "R05",
        "R06",
        "R07",
        "R08",
        "R09",
        "R10",
        "R11",
        "R12",
        "R13",
        "R14",
        "R15",
        "R16",
    ],
)

# Modify the data
df["ds"] = pd.to_datetime(df["ds"])  # Convert timestamp to datetime format
df.set_index("ds", inplace=True)  # Set timestamp as the index column

# Define available years, months, and times
years = [2019, 2020, 2021, 2022]
months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
times = [
    "00:00:00",
    "01:00:00",
    "02:00:00",
    "03:00:00",
    "04:00:00",
    "05:00:00",
    "06:00:00",
    "07:00:00",
    "08:00:00",
    "09:00:00",
    "10:00:00",
    "11:00:00",
    "12:00:00",
    "13:00:00",
    "14:00:00",
    "15:00:00",
    "16:00:00",
    "17:00:00",
    "18:00:00",
    "19:00:00",
    "20:00:00",
    "21:00:00",
    "22:00:00",
    "23:00:00",
]
R01, R02, R03, R04, R05, R06, R07, R08, R09, R10, R11, R12, R13, R14, R15, R16 = [
    "R01",
    "R02",
    "R03",
    "R04",
    "R05",
    "R06",
    "R07",
    "R08",
    "R09",
    "R10",
    "R11",
    "R12",
    "R13",
    "R14",
    "R15",
    "R16",
]
# Define the app
app = dash.Dash(__name__)

# Define the app layout
app.layout = html.Div(
    children=[
        html.H1(children="Temperature Data"),
        html.Div(
            children="""
            Select a year, month, and time to display temperature data.
            """
        ),
        dcc.Dropdown(
            id="year-dropdown",
            options=[{"label": year, "value": year} for year in years],
            value=2019,
            style={"width": "100px","display": "inline-block", "verticalAlign": "top"}
        ),
        dcc.Dropdown(
            id="month-dropdown",
            options=[{"label": month, "value": month} for month in months],
            value="January",
            style={"width": "100px","display": "inline-block", "verticalAlign": "top"}
        ),
        dcc.Dropdown(
            id="time-dropdown",
            options=[{"label": time, "value": time} for time in times],
            value="00:00:00",
            style={"width": "100px","display": "inline-block", "verticalAlign": "top"}
        ),
        dcc.Dropdown(
            id="R01_R02_R03_R04_R05_R06_R07_R08_R09_R10_R11_R12_R13_R14_R15_R16-dropdown",
            options=[
                {"label": device, "value": device}
                for device in [
                    "R01",
                    "R02",
                    "R03",
                    "R04",
                    "R05",
                    "R06",
                    "R07",
                    "R08",
                    "R09",
                    "R10",
                    "R11",
                    "R12",
                    "R13",
                    "R14",
                    "R15",
                    "R16",
                ]
            ],
            value="R01",
            style={"width": "100px","display": "inline-block", "verticalAlign": "top"}
        ),
        dcc.Graph(id="temperature-graph"),
    ]
)


# Define the callback to update the graph
@app.callback(
    dash.dependencies.Output("temperature-graph", "figure"),
    dash.dependencies.Input("year-dropdown", "value"),
    dash.dependencies.Input("month-dropdown", "value"),
    dash.dependencies.Input("time-dropdown", "value"),
    dash.dependencies.Input(
        "R01_R02_R03_R04_R05_R06_R07_R08_R09_R10_R11_R12_R13_R14_R15_R16-dropdown",
        "value",
    ),
)
def update_figure(
    year,
    month,
    time,
    R01_R02_R03_R04_R05_R06_R07_R08_R09_R10_R11_R12_R13_R14_R15_R16_dropdown,
):  # Select data for the desired year, month, and time
    start_date = f"{year}-{month}-01 {time}"
    end_date = pd.date_range(start_date, periods=2, freq="MS")[1].strftime(
        "%Y-%m-%d %H:%M:%S"
    )
    df_selected = df.loc[start_date:end_date].copy()
    df_selected = df_selected[
        df_selected[R01_R02_R03_R04_R05_R06_R07_R08_R09_R10_R11_R12_R13_R14_R15_R16_dropdown].notnull()
    ]
    # Create a line plot
    fig = px.line(df_selected, y=R01_R02_R03_R04_R05_R06_R07_R08_R09_R10_R11_R12_R13_R14_R15_R16_dropdown)
    fig.update_layout(title=f"{R01_R02_R03_R04_R05_R06_R07_R08_R09_R10_R11_R12_R13_R14_R15_R16_dropdown} Temperature")
    return fig


if __name__ == "__main__":
    app.run_server(debug=True)
