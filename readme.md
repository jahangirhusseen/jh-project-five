##### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### getElementById

#### getElementById() ব্যবহার করে আমরা HTML ডকুমেনটি থেকে নির্দিষ্ট id দেওয়া একটিমাত্র elment বের করতে পারি।

### getElementByClassName

#### getElementByClassName() ব্যবহার করে আমরা একই class name থাকা সবগুলো element বের করতে পারি।

### querySelector

#### querySelector() ব্যবহার করে আমরা যেকোন css selector দিয়ে dom থেকে element খুঁজতে পারি।

### querySelectorAll

#### querySelectorAll() ব্যবহার করে আমরা যেকোন css selector দিয়ে dom থেকে সবগুলো matching element একসাথে বের করতে পারি।

##### 2. How do you create and insert a new element into the DOM?

#### parent.appenChild() দিয়ে নতুন HTML element তৈরি করা যায়, এবং parent.appenChild() দিয়ে parent এর নির্দিষ্ট child এর আগে element বসানো যায়।

##### 3. What is Event Bubbling and how does it work?

#### Event Bubbling হলো ১টি Dom ইভেন্টের propagation পদ্ধতি, যেখানে ইভেন্ট প্রথম child element- এ ঘটে এবং তারপর ধাপে ধাপে parent element এর দিকে উঠেতে থাকে।

##### 4. What is Event Delegation in JavaScript? Why is it useful?

#### Event Delegation হলো একটি js technique, যেখানে আমরা child element- এর পরিবর্তে parent element এ ইভেন্ট listner বসাই এবং event target চেক করে কোন child element এ ইভেন্ট ঘটেছে তা handle করি।

##### 5. What is the difference between preventDefault() and stopPropagation() methods?

#### preventDefault() ব্রাউজারের default কাজ বন্ধ করে। যেমন: form submit হওয়া, link এ ক্লিক করলে অন্য পেজে যাওয়া ইত্যাদি বন্ধ করতে ব্যবহার হয়। এবং stopPropagation() এটি event bubbling/ capturing বন্ধ করে। event আর parent element -এ ছড়াবে না।
