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