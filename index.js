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
  const capacity = 16; // Initial capacity
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

  return {
    set,
    get,
    deleteKey,
    getSize,
    has,
  };
};

let hashMapOne = hashMapFactory();
console.log(hashMapOne.has("Emily"));
hashMapOne.set("Emily", "Bravo");
hashMapOne.set("Dorian", "Alpha");
console.log(hashMapOne.has("Emily"));
