# Dokumentacja Zapytań - Endpoints

---
> _0. [Login](#login)_  
> _1. [Project](#project)_  
> _2. [Order](#order)_  
> _3. [Delivery](#delivery)_  
> _4. [Shop](#shop)_  
> _5. [Profile](#profile)_
> 
> before every query need check session token 

---

[//]: # (## Czy endpointy powinny być z tokenem?)

```ts
// EXAMPLE
// fetch for project details by project id  
  
fetch("/<token>/project/<id>")   
    .then(response => response.json() as Promise<Project>)   
    .then(data => {})
```

---

# Login

### **0.1. Endpoint: `/autologin`**
#### Metoda: `GET`
Zwraca `true` albo `false` w zależności, czy token istnieje i nie wygasł

---

### **0.2. Endpoint: `/login`**
#### Metoda: `POST`
```json
{
  "email": "example@example.com",
  "password": "****"
}
```
Zwraca czy udało się zalogować

---

### **0.3. Endpoint: `/register`**
#### Metoda: `POST`
```json
{
  "nameAndSurname": "John",
  "email": "john@gmail.com",
  "password": "not_hash?",
  "repeatPassword": "repeat password",
  "phoneNumber": "123456789" // pattern
}
```
Zwraca czy udało się stworzyc konto tym samym zalogować

---

### **0.4. Endpoint: `/logout`**
#### Metoda: `GET`
Zwraca czy udało się wylogować

---

# Project

### **1.0. Endpoint: `/newProject/``**
#### Metoda: `POST`
```json
{
  "name": "",
  "number": "",
  "localisation": "",
  "leader_name": "",
  "leader_phone_number": "",
  "note": ""
}
```


### **1.1. Endpoint: `/projectDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły projektu (typ `Project`) na podstawie podanego identyfikatora (`id`)

---

# Order

### **2.0. Endpoint: `/newOrder/`**
#### Metoda: `POST`
```json
{
  "project_id": "",
  "products": [""],
  "type_of_delivery": "",
  "status": ""
}
```

### **2.1. Endpoint: `/orderDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły zamówienia (typ `Order`) na podstawie podanego identyfikatora (`id`)

---

### **2.2 Endpoint: `/orderHisotry/<number_of_order>`**
#### Metoda: `GET`
> number of order - to liczba zamówień, które powinnam dostać licząc od najnowszych
Zwraca listę json (skrócona wersja typu Order):
```json
{
  "id": "number",
  "date": "string",
  "delivery": "string",
  "material": "string",
  "status":  "OrderStatus (string)"
}
```

---

### **2.3 Endpoint: `/orders`**
#### Metoda: `GET`
Zwraca listę json (skrócona wersja typu Order):
```json
{
  "id": "number",
  "date": "string",
  "delivery": "string",
  "material": "string",
  "status":  "OrderStatus (string)"
}
```

---

# Delivery

### **3.0. Endpoint: `/newDelivery/`**
#### Metoda: `POST`
```json
{
  ""
}
```

### **3.1. Endpoint: `/deliveryDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły dostawy (typ `Delivery`) na podstawie podanego identyfikatora (`id`)

---

### **3.2. Endpoint: `/deliveryHistory/<number_of_delivery>`**
#### Metoda: `GET`
> number of delivery - to liczba dostaw, które powinnam dostać licząc od najnowszych
Zwraca listę json (skrócona wersja typu Order):
```json
{
  "id": "number",
  "company_name": "string",
  "contact": "string",
  "project": "string",
  "partnership_status":  "PartnershipStatus(string)"
}
```

---

# Products

### **4.1. Endpoint: `/products`**
#### Metoda: `GET`
Zwraca listę produktów (typ Product)

---

# Profile

---

[//]: # ()