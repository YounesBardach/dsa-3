<p align="center">
  <img src="https://i.postimg.cc/MGJN8m2w/Chat-GPT-Image-Aug-14-2025-03-23-29-AM.png" alt="DSA Practice Banner (HashMap)" width="900" />
</p>

<div align="center">

## HashMap Implementation (JavaScript)

A complete HashMap implementation with collision resolution using linked lists,
completed for The Odin Project.

![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=000)
![Topic: Data Structures](https://img.shields.io/badge/Topic-Data%20Structures-1f6feb)
![Algorithm: HashMap](https://img.shields.io/badge/Algorithm-HashMap-1f6feb)
![Status: Learning Project](https://img.shields.io/badge/Status-Learning%20Project-00b894)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Usage](#usage)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)

## About

This repository contains a complete HashMap implementation in JavaScript with
the following features:

- **Hash Function**: Custom hash function using prime number multiplication
- **Collision Resolution**: Linked list chaining for handling hash collisions
- **Dynamic Resizing**: Automatic capacity doubling when load factor is reached
- **Complete Method Set**: All standard HashMap operations implemented

Built as part of The Odin Project's HashMap lesson.

- Lesson:
  [The Odin Project — Project: HashMap](https://www.theodinproject.com/lessons/javascript-hashmap)

## Features

### Core HashMap Methods

- `set(key, value)`: Insert or update a key-value pair
- `get(key)`: Retrieve value by key (returns `null` if not found)
- `has(key)`: Check if key exists in the hash map
- `deleteKey(key)`: Remove a key-value pair
- `clear()`: Remove all entries from the hash map

### Utility Methods

- `getSize()`: Return the number of stored keys
- `getCapacity()`: Return the current capacity
- `getBuckets()`: Return the internal buckets array (for debugging)
- `keys()`: Return array of all keys
- `values()`: Return array of all values
- `entries()`: Return array of all [key, value] pairs

### Advanced Features

- **Load Factor Management**: Automatic resizing at 75% capacity
- **Collision Handling**: Linked list chaining for hash collisions
- **Integer Overflow Protection**: Modulo operation prevents overflow for long
  keys
- **Bounds Checking**: Error handling for out-of-bounds access

## Requirements

- Modern browser (open `index.html`) or
- Node.js 18+ (any modern LTS works)

## Quick start

Browser:

```bash
# Open in your default browser
xdg-open index.html   # Linux
open index.html       # macOS
start index.html      # Windows
```

Node:

```bash
node index.js   # runs the demo code inside index.js
```

## Usage

Create a new HashMap instance and start using it:

```js
const hashMap = hashMapFactory();

// Basic operations
hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");

console.log(hashMap.get("apple")); // -> "red"
console.log(hashMap.has("banana")); // -> true
console.log(hashMap.getSize()); // -> 3

// Update existing key
hashMap.set("apple", "green");
console.log(hashMap.get("apple")); // -> "green"

// Remove key
hashMap.deleteKey("banana");
console.log(hashMap.has("banana")); // -> false

// Get all data
console.log(hashMap.keys()); // -> ["apple", "carrot"]
console.log(hashMap.values()); // -> ["green", "orange"]
console.log(hashMap.entries()); // -> [["apple", "green"], ["carrot", "orange"]]
```

## Tech stack

- **Language:** Vanilla JavaScript
- **Runtime:** Browser or Node.js
- **Data Structure:** HashMap with linked list collision resolution

## Project structure

```
dsa-3/
├─ index.html     # Loads the script; open and check the browser console
├─ index.js       # Complete HashMap implementation with factory function
└─ README.md      # This file
```

---

**Note:** This implementation is designed for learning purposes and handles
string keys only. For production use, consider using JavaScript's built-in `Map`
object or a more robust library.
