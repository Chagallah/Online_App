import pyodbc

DRIVER_NAME = 'SQL Server';
SERVER_NAME = 'STORM-STRYKER\SQLEXPRESS01';
DATABASE_NAME = 'GHospital';

connection_string = f"""
DRIVER = {{{DRIVER_NAME}}};
SERVER = {SERVER_NAME};
DATABASE = {DATABASE_NAME};

Trust_connection = yes;
uid = '<username>'
pwd = '<password>'
"""

conn = pyodbc.connect(connection_string)
print (conn)
