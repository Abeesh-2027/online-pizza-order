# Django Pizza Ordering Web App 🍕  

**Author:** Abeesh
**Tech Stack:** Django, HTML, CSS, JavaScript, XAMPP (MySQL)  

---

## Description
This is a full-stack Django-based web application for online pizza ordering. Users can browse the menu, customize pizzas, add items to the cart, and place orders. The project is designed to run on a XAMPP local server with MySQL database support.

---

## Features
- Browse pizza menu with images and descriptions
- Add pizzas to cart and customize toppings
- Place online orders with quantity management
- Admin panel for managing pizzas, orders, and users
- Responsive UI with HTML, CSS, and JavaScript
- Local server setup using XAMPP

---


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pizza-ordering-django.git# online-pizza-order
This is a full-stack Django-based web application for ordering pizzas online. Users can browse the menu, customize pizzas, add items to the cart, and place orders. Built using Django, HTML/CSS, and JavaScript, and tested on XAMPP local server.

Usage:

Users can browse pizzas, add to cart, and place orders.
Admin can manage pizzas, orders, and user accounts via Django admin panel.

Future Improvements:
Online payment integration
Order tracking system
User authentication and profiles
Mobile-friendly interface


pizza/                   # Django project
│
├── manage.py
├── pizza/               # project settings
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── food/                # Django app
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   │
│   ├── templates/
│   │   └── food/
│   │       ├── aboutus.html
│   │       ├── cart.html
│   │       ├── cart2.html
│   │       ├── contact.html
│   │       ├── cust.html
│   │       ├── faq.html
│   │       ├── home.html
│   │       ├── login.html
│   │       ├── page2.html
│   │       ├── privacy.html
│   │       ├── service.html
│   │       └── success.html
│   │
│   └── static/
│       └── food/
│           ├── css/
│           │   ├── color.css
│           │   ├── style.css
│           │   └── styles.css
│           │
│           ├── js/
│           │   ├── script.js
│           │   └── scripts.js
│           │
│           └── images/
│               └── (all image files here, e.g., pizza1.jpg, logo.png)
│
└── requirements.txt
