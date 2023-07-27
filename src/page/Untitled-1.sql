SELECT *
FROM ecommerce.user
SELECT *
FROM ecommerce.catagory -- WHERE id = 1
use ecommerce;
SELECT *
from ecommerce.product;
SELECT c.id,
    c.name,
    p.productimage
from catagory c
    JOIN product p on c.id = p.catagory_id;
SELECT *
from ecommerce.product p
where p.catagory_id = 1;
use ecommerce;
CREATE TABLE cart (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id int NOT NULL,
    product_id int NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(id),
    FOREIGN KEY(product_id) REFERENCES product(id)
);
use ecommerce;
SELECT * from product;
WHERE
INSERT INTO cart (user_id, product_id)
VALUES (1, 1);

use ecommerce;
select p.id ,p.name, p.description , p.productimage ,p.price, c.user_id
FROM product p
JOIN cart c ON p.id = c.product_id
WHERE user_id = 1;

use ecommerce;
insert into user_address (country,city,region,user_id,address_line)
VALUES ('ethiopia','addis ababa','kilinto','1','addis ababa')
use ecommerce;
INSERT INTO review (value,comment,user_id,product_id)
VALUES (4,'this is probably the best thing',1,1);
use ecommerce;
SELECT * FROM review r
JOIN user u on u.id = r.user_id
WHERE product_id = 1;

use ecommerce;
SELECT * FROM payment_method;
use ecommerce;
INSERT INTO payment_method (user_id,payment_type_id,accountno)
VALUES (1,1,1000475236185);

select