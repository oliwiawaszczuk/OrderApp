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

> [!IMPORTANT]   
> Token sesji powinien być tworzony tylko przy login albo register i przekazywany za każdym zapytaniem, które dotyczy danego usera. Natomiast w autologin powinien być przedłużany o [x] czasu

---

### **0.1. Endpoint: `/autologin/<token>`**
#### Metoda: `GET`
Zwraca `true` albo `false` w zależności, czy token istnieje i nie wygasł. Jeśli `true` to przedłuża

---

### **0.2. Endpoint: `/login`**
#### Metoda: `POST`
```json
{
  "": "",
  "": ""
}
```
Zwraca czy udało się zalogować, jeśli tak to generuje i zwraca `token`

---

### **0.3. Endpoint: `/register`**
#### Metoda: `POST`
```json
{
  "": "",
  "": ""
}
```
Zwraca czy udało się stworzyc konto, jeśli tak to generuje i zwraca `token`

---

### **0.4. Endpoint: `/logout/<token>`**
#### Metoda: `GET`
Zwraca 

---

# Project

### **1.1. Endpoint: `/<token>/projectDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły projektu (typ `Project`) na podstawie podanego identyfikatora (`id`)

---

# Order

### **2.1. Endpoint: `/<token>/orderDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły zamówienia (typ `Order`) na podstawie podanego identyfikatora (`id`)

---

### **2.2 Endpoint: `/<token>/orderHisotry/<nuber_of_order>`**
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

### **2.3 Endpoint: `/<token>/orders`**
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

### **3.1. Endpoint: `/<token>/deliveryDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły dostawy (typ `Delivery`) na podstawie podanego identyfikatora (`id`)

---

### **3.2. Endpoint: `/<token>/deliveryHistory/<number_of_delivery>`**
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