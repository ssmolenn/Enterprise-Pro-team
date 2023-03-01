README

This script creates a web application using the Dash framework for visualizing temperature data. 
The data is read from a CSV file containing temperature readings from various devices at different times. 
The user can select a year, month, time, and device to view the temperature data for that selection. 
The data is displayed in a line plot using Plotly.

Requirements
Python 3
pandas
plotly.graph_objs
plotly.subplots
dash
dash_html_components
dash_core_components
plotly.express

Usage
Download the script and the mon-thur.csv data file to the same directory.
Install the required libraries by running the following command: pip install pandas plotly dash.
Run the script by executing the command: python script_name.py or simply run in the terminal and click on the link shown in the terminal.
Select a year, month, time, and device to display the temperature data for that selection.

Data
The mon-thur.csv data file contains temperature readings from various devices at different times. 
The data is organized in columns, where the first column contains timestamps and the subsequent columns contain temperature readings from the corresponding devices. 
The script reads the data from the CSV file and converts the timestamps to datetime format.