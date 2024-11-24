# Dokumentacja Typów Danych

---

> ## CONST
> date DD.MM.RR

```ts
enum TypeOfDelivery {
    Standard = "Standard Delivery",
    Express = "Express Delivery",
    LocalPickup = "Local Pickup",
}

enum OrderStatus {
    Processing = "#f1c34d",
    Delivered = "#43d843",
    Canceled = "#e23333",
}

enum PartnershipStatus {
    status1 = 1,
    status2 = 2,
}

enum Currencies {
    dollar = "$",
    euro = "€",
    pln = "zł",
}

enum SubCategory {
    General = "General",
    BricksAndBlocks = "Bricks & Blocks",
    SteelAndRebar = "Steel & Rebar",
    Aggregates = "Aggregates",
}
```

---

## User:

| Nazwa          | Typ      | Opis                |
|----------------|----------|---------------------|
| `id`           | `number` | `primary key`       | 
| `name`         | `string` | `len: 50, username` | 
| `surname`      | `string` | `len: 50, surname`  | 
| `email`        | `string` | `len 50 - unique`   | 
| `password`     | `string` | `len 100 - hashed`  | 
| `phone_number` | `string` | `len 9 - unique`    | 

---

## Project:
| Nazwa                 | Typ                 | Opis                        |
|-----------------------|---------------------|-----------------------------|
| `id`                  | `number`            | `piramy key`                |
| `number`              | `string or number`  | `number of project?`        |
| `date`                | `string`            | ``                          |
| `localisation`        | `string`            | ``                          |
| `leader_name`         | `string`            | ``                          |
| `leader phone number` | `string`            | `only phone number?`        |
| `note`                | `string`            | `len: 256, note in project` |

---

## Order:
| Nazwa              | Typ                      | Opis                               |
|--------------------|--------------------------|------------------------------------|
| `id`               | `number`                 | `primary key`                      |
| `date`             | `string`                 | ``                                 |
| `project_id`       | `number`                 | `foreign key (project.id)`         |
| `products_id`      | `[number]`               | `list of foreigh key (product.id)` |
| `type_of_delivery` | `TypOfDelivery (string)` | `enum TypOfDelivery`               |
| `status`           | `OrderStatus (string)`   | `enum OrderStatus`                 |

---

## Delivery:
| Nazwa                  | Typ                          | Opis                                 |
|------------------------|------------------------------|--------------------------------------|
| `id`                   | `number`                     | `primary key`                        |
| `name`                 | `string`                     | ``                                   |
| `company_localisation` | `string`                     | ``                                   |
| `cost`                 | `string`                     | ``                                   |
| `contact`              | `string`                     | ``                                   |
| `products_id`          | `[number]`                   | `list of foreign key (product.id)`   |
| `note`                 | `string`                     | `len: 256`                           |
| `files`                | `[string]`                   | `path to files?`                     |
| `project_contracted`   | `number`                     | `foreign key (project.id)`           |
| `partnership_status`   | `PartnershipStatus (string)` | ``                                   |
| `type_of_delivery`     | `TypOfDelivery (string)`     | `enum TypOfDelivery`                 |

---

## Product:
| Nazwa                    | Typ                    | Opis                                       |
|--------------------------|------------------------|--------------------------------------------|
| `id`                     | `number`               | `primary key`                              |
| `currency`               | `Currencies (string)`  | `enum Currencies`                          |
| `currency_before_amount` | `boolean`              | `need?`                                    |
| `cost_amount`            | `number`               | ``                                         |
| `for_how_many_cost`      | `string`               | `za co amount np. {cost_amount} per pound` |
| `description`            | `string`               | `len: 256`                                 |
| `company`                | `string`               | `len: 60`                                  |
| `subcategory`            | `Subcategory (string)` | `enum Subcategory`                         |
| `images`                 | `[string]`             | `path to images?`                          |
| `count`                  | `number`               | ``                                         |

---

## Sesion:
> token sesji, data