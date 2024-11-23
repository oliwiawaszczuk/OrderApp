# Dokumentacja Zapytań - Endpoints

---

[//]: # (## Czy endpointy powinny być z tokenem?)

```
// fetch for project details by project id  
  
fetch("/<token>/project/<id>")   
    .then(response => response.json() as Promise<Project>)   
    .then(data => {})
```

---

### **1. Endpoint: `/<token>/projectDetails/<id>`**
#### Metoda: `GET`
Zwraca pełne szczegóły projektu (typ `Project`) na podstawie podanego identyfikatora (`id`)

---

### **2. Endpoint: `/<token>/`**
#### Metoda: `GET`
Zwraca

---

[//]: # ()