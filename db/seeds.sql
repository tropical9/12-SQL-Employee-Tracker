INSERT INTO department (department_name)
VALUES ('techonology'), 
       ('HR'),
       ('Finance'),
       ('Law');

INSERT INTO role (role_title,salary, department_id)
VALUES ('software engineer', 70000, 1),
       ('HR manager', 60000, 2);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('sharmaine', 'pineda', 1, NULL),
       ('shar', 'pineda', 1, NULL),
       ('maine', 'pineda', 1, 2),
       ('S', 'p', 1, 1 );
       


