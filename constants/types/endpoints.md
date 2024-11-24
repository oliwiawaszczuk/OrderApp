# Dokumentacja Zapytań - Endpoints

---
> 1. Project
> 2. Order
> 3. Delivery
> 4. Shop 
> 5. Profile
> 
> before every query need check session token 

---

[//]: # (## Czy endpointy powinny być z tokenem?)

```ts
// fetch for project details by project id  
  
fetch("/<token>/project/<id>")   
    .then(response => response.json() as Promise<Project>)   
    .then(data => {})
```

---

### **1.1. Endpoint: `/<token>/projectDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły projektu (typ `Project`) na podstawie podanego identyfikatora (`id`)

---

### **2.1. Endpoint: `/<token>/orderDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły zamówienia (typ `Order`) na podstawie podanego identyfikatora (`id`)

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

### **3.1. Endpoint: `/<token>/deliveryDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły dostawy (typ `Delivery`) na podstawie podanego identyfikatora (`id`)

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

### **4.1. Endpoint: `/products`**
#### Metoda: `GET`
Zwraca listę produktów (typ Product)

---

[//]: # ()