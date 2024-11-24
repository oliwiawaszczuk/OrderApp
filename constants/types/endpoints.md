# Dokumentacja Zapytań - Endpoints

---
> 1. Project
> 2. Order
> 3. Delivery
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

---

### **3.1. Endpoint: `/<token>/deliveryDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły dostawy (typ `Delivery`) na podstawie podanego identyfikatora (`id`)

---

[//]: # ()