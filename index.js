// Node factory function

const nodeFactory = (key, value) => {
  return {
    key,
    value,
    next: null,
  };
};

// HashMap factory function

const hashMapFactory = () => {
  let capacity = 16; // Initial capacity
  const loadFactor = 0.75; // Load factor for resizing
  let size = 0; // Number of elements in the hash map
  let buckets = new Array(capacity); // Array to store the buckets

  // Hash function to generate index from key

  const hash = (key) => {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue =
        (hashValue * 31 + key.charCodeAt(i)) % Number.MAX_SAFE_INTEGER;
    }
    return hashValue % capacity; // Ensure index is within bounds
  };

  // Insert a key-value pair into the hash map

  const set = (key, value) => {
    // Check if we need to resize before inserting

    if (size >= capacity * loadFactor) {
      resize();
    }

    const index = hash(key);
    let current = buckets[index];

    // If there's no bucket yet, create one

    if (!current) {
      buckets[index] = nodeFactory(key, value); // Use nodeFactory to create a new node
      size++;
      return;
    }

    // Handle collision (linked list for collision resolution)

    while (current) {
      if (current.key === key) {
        current.value = value; // Update value if key exists
        return;
      }
      if (current.next === null) {
        current.next = nodeFactory(key, value); // Use nodeFactory to create the new node
        size++;
        return;
      }
      current = current.next;
    }
  };

  // Resize the hash map by doubling the capacity

  const resize = () => {
    size = 0
    const oldBuckets = buckets;
    const newCapacity = capacity * 2;
    buckets = new Array(newCapacity); // Create new buckets array
    capacity = newCapacity; // Update the capacity

    // Rehash all existing entries and place them in the new buckets

    for (let i = 0; i < oldBuckets.length; i++) {
      let current = oldBuckets[i];
      while (current) {
        set(current.key, current.value); // Reinsert into the new buckets
        current = current.next;
      }
    }
  };

  // Retrieve a value by key

  const get = (key) => {
    const index = hash(key);
    let current = buckets[index];
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null; // Return null if the key doesn't exist
  };

  // Delete a key-value pair

  const deleteKey = (key) => {
    const index = hash(key);
    let current = buckets[index];
    let prev = null;

    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.next = current.next; // Remove current node from the list
        } else {
          buckets[index] = current.next; // If it's the first node, move head
        }
        size--;
        return;
      }
      prev = current;
      current = current.next;
    }
  };

  // Return the current size of the hash map

  const getSize = () => size;

  // Return the current buckets of the hash map

  const getBuckets = () => buckets;

  // Return the current capacity of the hash map

  const getCapacity = () => capacity;

  // Tells if a key is in the hash map:

  const has = (key) => {
    const index = hash(key);
    let current = buckets[index];
    while (current) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false; // Return false if the key is not found
  };

  const clear = () => {
    buckets = new Array(capacity);
    size = 0;
  };

  const keys = () => {
    const allKeys = [];

    // Iterate over each bucket

    for (let i = 0; i < buckets.length; i++) {
      let current = buckets[i];

      // Traverse the linked list at each bucket

      while (current) {
        allKeys.push(current.key); // Collect each key in the linked list
        current = current.next;
      }
    }

    return allKeys; // Return the array of all keys
  };

  const values = () => {
    const allValues = [];

    // Iterate over each bucket

    for (let i = 0; i < buckets.length; i++) {
      let current = buckets[i];

      // Traverse the linked list at each bucket

      while (current) {
        allValues.push(current.value); // Collect each value in the linked list
        current = current.next;
      }
    }

    return allValues; // Return the array of all values
  };

  const entries = () => {
    const allEntries = [];

    // Iterate over each bucket

    for (let i = 0; i < buckets.length; i++) {
      let current = buckets[i];

      // Traverse the linked list at each bucket

      while (current) {
        allEntries.push([current.key, current.value]); // Collect each node in the linked list
        current = current.next;
      }
    }

    return allEntries; // Return the array of all values
  };

  return {
    set,
    get,
    deleteKey,
    getSize,
    getBuckets,
    getCapacity,
    has,
    clear,
    keys,
    values,
    entries,
  };
};

let hashMapOne = hashMapFactory();

// Testing

// hashMapOne.set("Emily", "Bravo");
// hashMapOne.set("Emilz", "Bravo");
// hashMapOne.set("Dorian", "Alpha");
// hashMapOne.set("Dorians", "Baggio");
// hashMapOne.set("apple", "red");
// hashMapOne.set("banana", "yellow");
// hashMapOne.set("Emilo", "Bravo");
// hashMapOne.set("Emila", "Bravo");
// hashMapOne.set("Doriano", "Alpha");
// hashMapOne.set("Doriansi", "Baggio");
// hashMapOne.set("appleu", "red");
// hashMapOne.set("bananas", "yellow");
// hashMapOne.set("bananasa", "yellow");
// hashMapOne.set("abananasa", "yellow");

// console.log(hashMapOne.get("appleu"))
// console.log(hashMapOne.get("bananas"))
// console.log(hashMapOne.has("Doriansi"))
// hashMapOne.deleteKey("Doriansi")
// console.log(hashMapOne.has("Doriansi"))
// console.log(hashMapOne.entries());
// console.log(hashMapOne.getCapacity());
// console.log(hashMapOne.getSize());
// hashMapOne.clear()
// console.log(hashMapOne.getCapacity());
// console.log(hashMapOne.getSize());
// console.log(hashMapOne.entries());
// hashMapOne.set("Emilo", "Bravo");
// hashMapOne.set("Doriansi", "Baggio");
// hashMapOne.set("appleu", "red");
// hashMapOne.set("bananas", "yellow");
// hashMapOne.set("bananasa", "yellow");
// hashMapOne.set("abananasa", "yellow");

// console.log(hashMapOne.keys());
// console.log(hashMapOne.values());
// console.log(hashMapOne.entries());



