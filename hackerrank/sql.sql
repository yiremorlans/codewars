/**
* Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.
**/
select * from city
where CountryCode = 'USA' AND Population > 100000;
/**
* Query the names of all American cities in the CITY table with populations larger than 120000. The CountryCode for America is USA.
**/
select city.name from City
where CountryCode = 'USA' AND Population > 120000;
/**
* Query all columns for all cities in the CITY table
**/
select * from city;
/**
* Query all columns for a city in the CITY table with the ID 1661
**/
select * from City
where ID = 1661;
/**
* Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.
**/
select * from City
where CountryCode = 'JPN';
/**
* Query the names of all Japanese cities in the CITY table.
**/
select city.name from City
where CountryCode = 'JPN';
/**
* Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.
**/
select city from station
where ID % 2 = 0
group by city; 
/** OR **/
select distinct city from station
where ID % 2 = 0;