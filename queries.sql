-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select 
    ProductName, CategoryName
from product as p
left join category as c
    on p.id = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select 
    id, ShipName
from "Order"
where OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select 
    ProductName, Quantity
from Product as P
join OrderDetail as O
    on P.id = O.ProductId
where OrderId = 10251
order by ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select 
    O.Id as OrderId, C.CompanyName as "Customer's Company Name", E.LastName as "Employee Last Name"
from "Order" as O
join Customer as C
    on O.CustomerId = C.Id
join Employee as E
    on O.EmployeeId = E.Id


-- Stretch 

-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT 
    c.categoryid, categoryname, count(c.categoryid) as "Products in Category"
from categories as c
join products as p
    on c.categoryid = p.categoryid
group by c.categoryid


-- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
SELECT 
	OrderID, count(o.quantity) as ItemCount
from OrderDetails as o
join Products as p
	on o.productid = p.productid
group by OrderID