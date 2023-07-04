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
/** OR END OF CITY NAMES **/
select distinct city from station
where city regexp '[aeiou]$';
/** 
* Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. No duplicate results.
*/
select distinct city from station
where city regexp '^[AEIOU]' AND city regexp '[aeiou]$';
/**
* Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.
*/
select city from station
where NOT city regexp '^[AEIOU]'
group by city;
/**
* Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.
*/
select distinct city 
from station
where city not like '%a' AND city not like '%e' AND city not like '%i' AND city not like '%o' AND city not like '%u';
/**
* Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.
**/
select distinct city 
from Station
where not city regexp '^[AEIOU]' OR not city regexp '[aeiou]$';
/** 
* Query the Name of any student in STUDENTS who scored higher than  Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
**/
select name 
from students
where marks > 75
order by right(name, 3), ID asc;
/**
* Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.
**/
select name 
from Employee
order by name;
/**
* Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.
**/
SELECT SUM(city.population)
FROM Country
LEFT JOIN City 
ON city.countrycode = country.code
WHERE country.continent = 'ASIA';
/**
* Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.
**/
select city.name
from City
INNER JOIN Country
ON city.countrycode = country.code
where country.continent = 'Africa';
/**
* Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.
**/
select country.continent, FlOOR(AVG(city.population))
from Country
INNER JOIN City ON city.countrycode = country.code
group by country.continent;
/**
* How can you produce a list of facilities that charge a fee to members, and that fee is less than 1/50th of the monthly maintenance cost? Return the facid, facility name, member cost, and monthly maintenance of the facilities in question.
**/
select facid, name, membercost, monthlymaintenance from cd.facilities
where membercost > 0 AND (membercost < monthlymaintenance/50);
/**
* Produce a list of all facilities whose name includes 'Tennis'
**/
select * from cd.facilities
where name like '%Tennis%';
/**
* Retrieve all the fields for facilities with ID 1 and 5 w/o the OR operator
**/
select * from cd.facilities
where facid = 1
UNION
select * from cd.facilities
where facid = 5;
/**
* IDEALLY YOU SHOULD USE THE IN OPERATOR
**/
select * from cd.facilities
where facid in (1,5);
/** 
* How can you produce a list of facilities, with each labelled as 'cheap' or 'expensive' depending on if their monthly maintenance cost is more than $100? Return the name and monthly maintenance of the facilities in question.
**/
select name, 
		CASE when monthlymaintenance > 100 then 
			'expensive'
		ELSE 
			'cheap'
		END as cost
		from cd.facilities
/**
* How can you produce a list of members who joined after the start of September 2012? Return the memid, surname, firstname, and joindate of the members in question.
**/
select memid, surname, firstname, joindate 
	from cd.members
	where joindate >= '2012-09-01';  
/**
* How can you produce an ordered list of the first 10 surnames in the members table? The list must not contain duplicates.
**/
select distinct surname 
    from cd.members
order by surname
limit 10;
