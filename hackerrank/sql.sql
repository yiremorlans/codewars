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
/**
* Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
**/
select (count(city) - count(distinct city)) from Station;
/**
* Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
**/
select CITY, length(CITY) from STATION 
order by length(CITY), CITY limit 1;
select CITY, length(CITY) from STATION 
order by length(CITY) desc, CITY limit 1;
/**
* Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.
**/
select city from station
where city like 'A%' OR city like 'E%' OR city like 'I%' or city like 'O%' or city like 'U%'
group by city;
