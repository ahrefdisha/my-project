import React, { useState } from 'react';
import './App.css';

const categories = ['Men', 'Women', 'Kids', 'Electronics', 'Footwear', 'Grocery'];

const products = [
  // Men
  { id: 1, name: 'Men T-Shirt', category: 'Men', price: '₹1,599', image: '/images/mens-tshirt.png', description: 'Comfortable cotton t-shirt for everyday wear.' },
  { id: 2, name: 'Men Jeans', category: 'Men', price: '₹3,199', image: '/images/mens-jeans.png', description: 'Classic blue jeans with perfect fit and durability.' },
  { id: 3, name: 'Men Jacket', category: 'Men', price: '₹4,799', image: '/images/mens-jacket.png', description: 'Stylish jacket for cool weather protection.' },
  { id: 4, name: 'Men Shorts', category: 'Men', price: '₹1,999', image: '/images/mens-shorts.png', description: 'Casual shorts perfect for summer activities.' },
  { id: 5, name: 'Men Hoodie', category: 'Men', price: '₹2,799', image: '/images/mens-hoodies.png', description: 'Warm and cozy hoodie for casual comfort.' },
  // Women
  { id: 6, name: 'Women Dress', category: 'Women', price: '₹2,799', image: '/images/women-dress.png', description: 'Elegant dress for special occasions.' },
  { id: 7, name: 'Women Top', category: 'Women', price: '₹1,999', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', description: 'Stylish top for everyday fashion.' },
  { id: 8, name: 'Women Skirt', category: 'Women', price: '₹2,199', image: '/images/women-skrits.png', description: 'Fashionable skirt for various occasions.' },
  { id: 9, name: 'Women Jeans', category: 'Women', price: '₹2,999', image: '/images/women-jeans.png', description: 'Comfortable and stylish women\'s jeans.' },
  { id: 10, name: 'Women Jacket', category: 'Women', price: '₹4,399', image: '/images/women-jacket.png', description: 'Trendy jacket for fashion-forward women.' },
  // Kids
  { id: 11, name: 'Kids Shirt', category: 'Kids', price: '₹1,199', image: '/images/kids-shirts.png', description: 'Comfortable shirt for active kids.' },
  // { id: 12, name: 'Kids Shorts', category: 'Kids', price: '₹1,399', image: '/images/kids-shorts.png', description: 'Durable shorts for kids\' outdoor activities.' },
  { id: 13, name: 'Kids Dress', category: 'Kids', price: '₹1,799', image: '/images/kids-dress.png', description: 'Adorable dress for special occasions.' },
  { id: 14, name: 'Kids Hoodie', category: 'Kids', price: '₹1,599', image: '/images/kids-hoodie.png', description: 'Warm hoodie for kids in cold weather.' },
  { id: 15, name: 'Kids Pants', category: 'Kids', price: '₹1,499', image: '/images/kids-pants.png', description: 'Comfortable pants for everyday wear.' },
  // Electronics
  { id: 16, name: 'Smartphones', category: 'Electronics', price: '₹69,999', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', description: 'Latest smartphones with advanced features.' },
  { id: 17, name: 'Laptops', category: 'Electronics', price: '₹1,79,999', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80', description: 'High-performance laptops for work and gaming.' },
  { id: 18, name: 'Headphones', category: 'Electronics', price: '₹24,999', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80', description: 'Premium wireless headphones with noise cancellation.' },
  // Footwear
  { id: 19, name: 'Men Shoes', category: 'Footwear', price: '₹12,999', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80', description: 'Stylish and comfortable men\'s footwear.' },
  { id: 20, name: 'Women Shoes', category: 'Footwear', price: '₹7,999', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80', description: 'Elegant women\'s shoes for every occasion.' },
  { id: 21, name: 'Kids Shoes', category: 'Footwear', price: '₹3,999', image: '/images/shoes-pu.png', description: 'Comfortable and durable kids\' footwear.' },
  // Grocery
  { id: 22, name: 'Fresh Fruits', category: 'Grocery', price: '₹299', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80', description: 'Fresh and organic fruits from local farms.' },
  { id: 23, name: 'Fresh Vegetables', category: 'Grocery', price: '₹79', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=400&q=80', description: 'Fresh vegetables for healthy cooking.' },
  { id: 24, name: 'Dairy & Eggs', category: 'Grocery', price: '₹72', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80', description: 'Fresh dairy products and farm eggs.' },
];

// Product collections with variations
const productCollections = {
  'Men Jeans': [
    { id: 201, name: 'Classic Blue Jeans', price: '₹3,199', image: '/images/mens-light.png', color: 'Blue', fit: 'Regular', size: '32x32' },
    { id: 202, name: 'Slim Fit Black Jeans', price: '₹3,599', image: '/images/mens-black.png', color: 'Black', fit: 'Slim', size: '30x32' },
    { id: 203, name: 'Relaxed Fit Gray Jeans', price: '₹3,399', image: '/images/mens-g.png', color: 'Gray', fit: 'Relaxed', size: '34x32' },
    { id: 204, name: 'Skinny Fit Dark Blue', price: '₹3,799', image: '/images/mens-dark.png', color: 'Dark Blue', fit: 'Skinny', size: '31x32' },
    { id: 205, name: 'Bootcut Brown Jeans', price: '₹3,399', image: '/images/mens-b.png', color: 'Brown', fit: 'Bootcut', size: '33x32' },
    { id: 206, name: 'Straight Leg White Jeans', price: '₹3,599', image: '/images/mens-w.png', color: 'White', fit: 'Straight', size: '32x34' },
  ],
  'Men T-Shirt': [
    { id: 101, name: 'Classic White T-Shirt', price: '₹1,599', image: '/images/mens-white.png', color: 'White', fit: 'Regular', size: 'M' },
    { id: 102, name: 'Black V-Neck T-Shirt', price: '₹1,799', image: '/images/mens-v.png', color: 'Black', fit: 'Slim', size: 'L' },
    { id: 103, name: 'Gray Crew Neck T-Shirt', price: '₹1,699', image: '/images/mens-grey.png', color: 'Gray', fit: 'Regular', size: 'XL' },
    { id: 104, name: 'Navy Blue T-Shirt', price: '₹1,899', image: '/images/mens-blue.png', color: 'Navy Blue', fit: 'Slim', size: 'S' },
    { id: 105, name: 'Red Striped T-Shirt', price: '₹1,999', image: '/images/mens-red.png', color: 'Red', fit: 'Regular', size: 'M' },
    { id: 106, name: 'Green Polo T-Shirt', price: '₹2,199', image: '/images/mens-polo.png', color: 'Green', fit: 'Regular', size: 'L' },
  ],
  'Men Jacket': [
    { id: 301, name: 'Classic Denim Jacket', price: '₹4,799', image: '/images/mens-denim.png', color: 'Blue', fit: 'Regular', size: 'M' },
    { id: 302, name: 'Black Leather Jacket', price: '₹6,799', image: '/images/mens-zip.png', color: 'Black', fit: 'Slim', size: 'L' },
    { id: 303, name: 'Brown Bomber Jacket', price: '₹5,999', image: '/images/mens-fly.png', color: 'Brown', fit: 'Regular', size: 'XL' },
    { id: 304, name: 'Gray Blazer Jacket', price: '₹7,199', image: '/images/mens-zer.png', color: 'Gray', fit: 'Slim', size: 'S' },
    { id: 305, name: 'Green Military Jacket', price: '₹5,599', image: '/images/mens-army.png', color: 'Green', fit: 'Regular', size: 'M' },
    { id: 306, name: 'Red Sports Jacket', price: '₹5,199', image: '/images/mens-rb.png', color: 'Red', fit: 'Slim', size: 'L' },
  ],
  'Men Shorts': [
    { id: 401, name: 'Classic Khaki Shorts', price: '₹1,999', image: '/images/mens-shorts.png', color: 'Khaki', fit: 'Regular', size: 'M' },
    { id: 402, name: 'Black Athletic Shorts', price: '₹2,199', image: '/images/mens-s.png', color: 'Black', fit: 'Slim', size: 'L' },
    { id: 403, name: 'Blue Denim Shorts', price: '₹2,399', image: '/images/mens-h.png', color: 'Blue', fit: 'Regular', size: 'XL' },
    { id: 404, name: 'Gray Cargo Shorts', price: '₹2,599', image: '/images/mens-shorts.png', color: 'Gray', fit: 'Relaxed', size: 'S' },
    { id: 405, name: 'Green Swim Shorts', price: '₹2,099', image: '/images/mens-shorts.png', color: 'Green', fit: 'Slim', size: 'M' },
    { id: 406, name: 'Red Basketball Shorts', price: '₹2,299', image: '/images/mens-shorts.png', color: 'Red', fit: 'Regular', size: 'L' },
  ],
  'Men Hoodie': [
    { id: 501, name: 'Classic Gray Hoodie', price: '₹2,799', image: '/images/mens-e.png', color: 'Gray', fit: 'Regular', size: 'M' },
    { id: 502, name: 'Black Pullover Hoodie', price: '₹2,999', image: '/images/mens-hoodies.png', color: 'Black', fit: 'Slim', size: 'L' },
    { id: 503, name: 'Blue Zip-Up Hoodie', price: '₹3,199', image: '/images/men-m.png', color: 'Blue', fit: 'Regular', size: 'XL' },
    // { id: 504, name: 'Green Fleece Hoodie', price: '₹3,399', image: '/images/mens-hoodies.png', color: 'Green', fit: 'Relaxed', size: 'S' },
    // { id: 505, name: 'Red Athletic Hoodie', price: '₹2,899', image: '/images/mens-hoodies.png', color: 'Red', fit: 'Slim', size: 'M' },
    // { id: 506, name: 'White Casual Hoodie', price: '₹3,099', image: '/images/mens-hoodies.png', color: 'White', fit: 'Regular', size: 'L' },
  ],
  // Women's Collections
  'Women Dress': [
    { id: 601, name: 'Elegant Evening Dress', price: '₹2,799', image: '/images/women-ali.png', color: 'Black', fit: 'Regular', size: 'M' },
    { id: 602, name: 'Summer Floral Dress', price: '₹2,999', image: '/images/women-mm.png', color: 'Blue Floral', fit: 'Slim', size: 'S' },
    { id: 603, name: 'Cocktail Party Dress', price: '₹3,399', image: '/images/women-shi.png', color: 'Red', fit: 'Regular', size: 'L' },
    { id: 604, name: 'Casual Maxi Dress', price: '₹2,599', image: '/images/women-maxi.png', color: 'Green', fit: 'Relaxed', size: 'XL' },
  //   { id: 605, name: 'Office Professional Dress', price: '₹3,599', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', color: 'Navy Blue', fit: 'Slim', size: 'M' },
  //   { id: 606, name: 'Beach Cover-up Dress', price: '₹2,199', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', color: 'White', fit: 'Regular', size: 'S' },
   ],
  'Women Top': [
    { id: 701, name: 'Classic White Blouse', price: '₹1,999', image: '/images/women-te.png', color: 'White', fit: 'Regular', size: 'M' },
    // { id: 702, name: 'Silk Camisole Top', price: '₹2,199', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', color: 'Black', fit: 'Slim', size: 'S' },
    // { id: 703, name: 'Ruffled Sleeve Top', price: '₹2,399', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', color: 'Pink', fit: 'Regular', size: 'L' },
    { id: 704, name: 'Crop Top with Lace', price: '₹2,099', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', color: 'Ivory', fit: 'Slim', size: 'XS' },
    // { id: 705, name: 'Button-Down Shirt', price: '₹2,599', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', color: 'Light Blue', fit: 'Regular', size: 'M' },
    // { id: 706, name: 'Off-Shoulder Top', price: '₹2,299', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', color: 'Red', fit: 'Slim', size: 'L' },
  ],
  'Women Skirt': [
    { id: 801, name: 'A-Line Midi Skirt', price: '₹2,199', image: '/images/women-rr.png', color: 'Black', fit: 'Regular', size: 'M' },
    { id: 802, name: 'Pencil Skirt Professional', price: '₹2,599', image: '/images/women-pen.png', color: 'Navy Blue', fit: 'Slim', size: 'S' },
    // { id: 803, name: 'Pleated Mini Skirt', price: '₹2,099', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', color: 'Gray', fit: 'Regular', size: 'L' },
    // { id: 804, name: 'Maxi Skirt with Slit', price: '₹2,799', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', color: 'Burgundy', fit: 'Relaxed', size: 'XL' },
    // { id: 805, name: 'Denim Mini Skirt', price: '₹2,399', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', color: 'Blue Denim', fit: 'Slim', size: 'M' },
  //   { id: 806, name: 'Tulle Party Skirt', price: '₹2,999', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', color: 'Pink', fit: 'Regular', size: 'S' };
   ],
  'Women Jeans': [
    { id: 901, name: 'High-Waist Skinny Jeans', price: '₹2,999', image: '/images/women-fit.png', color: 'Blue', fit: 'Skinny', size: '26' },
    // { id: 902, name: 'Mom Fit Jeans', price: '₹3,399', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', color: 'Light Blue', fit: 'Relaxed', size: '28' },
    // { id: 903, name: 'Straight Leg Jeans', price: '₹3,199', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', color: 'Black', fit: 'Straight', size: '30' },
    { id: 904, name: 'Wide Leg Jeans', price: '₹3,599', image: '/images/women-wide.png', color: 'Gray', fit: 'Wide', size: '32' },
  //   { id: 905, name: 'Cropped Ankle Jeans', price: '₹2,899', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', color: 'Dark Blue', fit: 'Regular', size: '27' };
  //   { id: 906, name: 'Distressed Boyfriend Jeans', price: '₹3,399', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', color: 'Blue', fit: 'Relaxed', size: '29' };
   ],
   'Women Jacket': [
    { id: 1001, name: 'Classic Blazer Jacket', price: '₹4,399', image: '/images/mens-zer.png', color: 'Black', fit: 'Regular', size: 'M' },
    { id: 1002, name: 'Denim Jacket Vintage', price: '₹3,799', image: '/images/mens-denim.png', color: 'Blue Denim', fit: 'Regular', size: 'S' },
    { id: 1003, name: 'Leather Moto Jacket', price: '₹5,999', image: '/images/mens-zip.png', color: 'Black', fit: 'Slim', size: 'L' },
  //   { id: 1004, name: 'Bomber Jacket Sporty', price: '$52', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', color: 'Olive Green', fit: 'Regular', size: 'M' },
  //   { id: 1005, name: 'Trench Coat Classic', price: '$85', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', color: 'Beige', fit: 'Regular', size: 'L' },
  //   { id: 1006, name: 'Cardigan Sweater Jacket', price: '$45', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', color: 'Gray', fit: 'Relaxed', size: 'XL' },
  ],
  // Kids Collections
  'Kids Shirt': [
    { id: 1101, name: 'Cartoon Print T-Shirt', price: '₹1,199', image: '/images/kids-car.png', color: 'Blue', fit: 'Regular', size: '4-5Y' },
    { id: 1102, name: 'Striped Polo Shirt', price: '₹1,399', image: '/images/mens-red.png', color: 'Black', fit: 'Regular', size: '8-9Y' },
  //   { id: 1104, name: 'Rainbow Color Shirt', price: '$17', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', color: 'Multicolor', fit: 'Regular', size: '10-11Y' },
  //   { id: 1105, name: 'School Uniform Shirt', price: '$20', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', color: 'White', fit: 'Regular', size: '12-13Y' },
  //   { id: 1106, name: 'Sports Team Shirt', price: '$19', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', color: 'Team Colors', fit: 'Regular', size: '14-15Y' },
   ],
  // 'Kids Shorts': [
  //   { id: 1201, name: 'Cargo Shorts Adventure', price: '₹1,399', image: 'https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=400&q=80', color: 'Khaki', fit: 'Regular', size: '4-5Y' },
  //   { id: 1202, name: 'Athletic Shorts Sporty', price: '₹1,299', image: 'https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=400&q=80', color: 'Blue', fit: 'Regular', size: '6-7Y' },
  //   { id: 1203, name: 'Denim Shorts Classic', price: '₹1,599', image: 'https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=400&q=80', color: 'Blue Denim', fit: 'Regular', size: '8-9Y' },
  //   { id: 1204, name: 'Swim Shorts Beach', price: '$17', image: 'https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=400&q=80', color: 'Red', fit: 'Regular', size: '10-11Y' },
  //   { id: 1205, name: 'Plaid Shorts School', price: '$19', image: 'https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=400&q=80', color: 'Plaid', fit: 'Regular', size: '12-13Y' },
  //   { id: 1206, name: 'Basketball Shorts Game', price: '$18', image: 'https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=400&q=80', color: 'Black', fit: 'Regular', size: '14-15Y' },
  //  ],
  'Kids Dress': [
    { id: 1301, name: 'Princess Party Dress', price: '₹1,799', image: '/images/kids-dressp1.png', color: 'Pink', fit: 'Regular', size: '4-5Y' },
    { id: 1302, name: 'Summer Sundress', price: '₹1,599', image: '/images/kids-dressp2.png', color: 'Yellow', fit: 'Regular', size: '6-7Y' },
    // { id: 1303, name: 'School Uniform Dress', price: '₹1,999', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', color: 'Navy Blue', fit: 'Regular', size: '8-9Y' },
  //   { id: 1304, name: 'Holiday Special Dress', price: '$28', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', color: 'Red', fit: 'Regular', size: '10-11Y' },
  //   { id: 1305, name: 'Casual Play Dress', price: '$18', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', color: 'Blue', fit: 'Regular', size: '12-13Y' },
  //   { id: 1306, name: 'Formal Occasion Dress', price: '$30', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', color: 'White', fit: 'Regular', size: '14-15Y' },
   ],
  'Kids Hoodie': [
    { id: 1401, name: 'Animal Print Hoodie', price: '₹1,599', image: '/images/kids-hoodies-ani.png', color: 'Gray', fit: 'Regular', size: '4-5Y' },
    { id: 1402, name: 'Rainbow Hoodie Fun', price: '₹1,799', image: '/images/kids-rain.png', color: 'Multicolor', fit: 'Regular', size: '6-7Y' },
    { id: 1403, name: 'Sports Team Hoodie', price: '₹1,899', image: '/images/kids-sp.png', color: 'Team Colors', fit: 'Regular', size: '8-9Y' },
  //   { id: 1404, name: 'Zipper Hoodie Active', price: '$21', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', color: 'Blue', fit: 'Regular', size: '10-11Y' },
  //   { id: 1405, name: 'Fleece Hoodie Warm', price: '$23', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', color: 'Green', fit: 'Regular', size: '12-13Y' },
  //   { id: 1406, name: 'Pullover Hoodie Casual', price: '$20', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', color: 'Black', fit: 'Regular', size: '14-15Y' },
   ],
  'Kids Pants': [
    { id: 1501, name: 'Cargo Pants Adventure', price: '₹1,499', image: '/images/kids-p.png', color: 'Khaki', fit: 'Regular', size: '4-5Y' },
    { id: 1502, name: 'Jeans Classic Fit', price: '₹1,699', image: '/images/kids-p1.png', color: 'Blue', fit: 'Regular', size: '6-7Y' },
    { id: 1503, name: 'Track Pants Sporty', price: '₹1,399', image: '/images/kids-p2.png', color: 'Gray', fit: 'Regular', size: '8-9Y' },
  //   { id: 1504, name: 'School Uniform Pants', price: '$23', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', color: 'Navy Blue', fit: 'Regular', size: '10-11Y' },
  //   { id: 1505, name: 'Sweatpants Comfort', price: '$17', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', color: 'Black', fit: 'Regular', size: '12-13Y' },
  //   { id: 1506, name: 'Dress Pants Formal', price: '$25', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', color: 'Black', fit: 'Regular', size: '14-15Y' },
   ],
  
  // Electronics Collections
  'Smartphones': [
    { id: 1601, name: 'iPhone 15 Pro', price: '₹1,49,900', image: '/images/phone-i.png', brand: 'Apple', storage: '256GB', color: 'Titanium' },
    { id: 1602, name: 'Samsung Galaxy S24', price: '₹1,29,999', image: '/images/phone-sam.png', brand: 'Samsung', storage: '256GB', color: 'Phantom Black' },
    { id: 1603, name: 'OnePlus 12', price: '₹69,999', image: '/images/phone-one.png', brand: 'OnePlus', storage: '256GB', color: 'Silk Black' },
    { id: 1604, name: 'Xiaomi 14 Ultra', price: '₹89,999', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', brand: 'Xiaomi', storage: '512GB', color: 'Black' },
    { id: 1605, name: 'Google Pixel 8 Pro', price: '₹1,06,999', image: '/images/phone-google.png', brand: 'Google', storage: '256GB', color: 'Obsidian' },
    { id: 1606, name: 'Nothing Phone 2', price: '₹44,999', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', brand: 'Nothing', storage: '128GB', color: 'White' },
  ],
  'Laptops': [
    { id: 1701, name: 'MacBook Pro M3', price: '₹2,49,900', image: '/images/laptop-mac.png', brand: 'Apple', processor: 'M3 Pro', storage: '1TB' },
    { id: 1702, name: 'Dell XPS 13 Plus', price: '₹1,89,999', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80', brand: 'Dell', processor: 'Intel i7', storage: '512GB' },
    { id: 1703, name: 'HP Spectre x360', price: '₹1,59,999', image: '/images/laptop-hp.png', brand: 'HP', processor: 'Intel i7', storage: '1TB' },
    { id: 1704, name: 'Lenovo ThinkPad X1', price: '₹2,19,999', image: '/images/laptop-lenovo.png', brand: 'Lenovo', processor: 'Intel i7', storage: '1TB' },
    { id: 1705, name: 'ASUS ROG Strix', price: '₹1,79,999', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80', brand: 'ASUS', processor: 'AMD Ryzen 9', storage: '1TB' },
    { id: 1706, name: 'MSI Gaming Laptop', price: '₹1,99,999', image: '/images/laptop=game.png', brand: 'MSI', processor: 'Intel i9', storage: '2TB' },
  ],
  'Headphones': [
    { id: 1801, name: 'Sony WH-1000XM5', price: '₹32,999', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80', brand: 'Sony', type: 'Wireless', features: 'Noise Cancelling' },
    { id: 1802, name: 'Bose QuietComfort 45', price: '₹29,999', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80', brand: 'Bose', type: 'Wireless', features: 'Noise Cancelling' },
    { id: 1803, name: 'Apple AirPods Pro', price: '₹24,999', image: '/images/earphone-app.png', brand: 'Apple', type: 'Wireless', features: 'Active Noise Cancellation' },
    { id: 1804, name: 'Samsung Galaxy Buds2', price: '₹14,999', image: '/images/earphone-kg.png', brand: 'Samsung', type: 'Wireless', features: 'Active Noise Cancellation' },
    { id: 1805, name: 'JBL Live Pro 2', price: '₹19,999', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80', brand: 'JBL', type: 'Wireless', features: 'True Wireless' },
    { id: 1806, name: 'OnePlus Buds Pro 2', price: '₹11,999', image: '/images/earphone-plus.png', brand: 'OnePlus', type: 'Wireless', features: 'Active Noise Cancellation' },
  ],
  
  // Footwear Collections
  'Men Shoes': [
    { id: 1901, name: 'Nike Air Max 270', price: '₹12,999', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80', brand: 'Nike', type: 'Sports', size: 'UK 8' },
    { id: 1902, name: 'Adidas Ultraboost 22', price: '₹18,999', image: '/images/shoes-das.png', brand: 'Adidas', type: 'Running', size: 'UK 9' },
    { id: 1903, name: 'Puma RS-X', price: '₹8,999', image: '/images/shoes-puma.png', brand: 'Puma', type: 'Casual', size: 'UK 7' },
  //   { id: 1904, name: 'Reebok Classic', price: '₹6,999', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80', brand: 'Reebok', type: 'Casual', size: 'UK 8' },
  //   { id: 1905, name: 'New Balance 574', price: '₹9,999', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80', brand: 'New Balance', type: 'Lifestyle', size: 'UK 9' },
  //   { id: 1906, name: 'Converse Chuck Taylor', price: '₹5,999', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80', brand: 'Converse', type: 'Casual', size: 'UK 8' },
   ],
  'Women Shoes': [
    { id: 2001, name: 'Nike Air Jordan 1', price: '₹15,999', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80', brand: 'Nike', type: 'Lifestyle', size: 'UK 6' },
    { id: 2002, name: 'Adidas Stan Smith', price: '₹7,999', image: '/images/shoes-das.png', brand: 'Adidas', type: 'Casual', size: 'UK 7' },
    { id: 2003, name: 'Puma Cali Sport', price: '₹6,999', image: '/images/shoes-pu.png', brand: 'Puma', type: 'Casual', size: 'UK 6' },
    // { id: 2004, name: 'Vans Old Skool', price: '₹5,999', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80', brand: 'Vans', type: 'Skate', size: 'UK 7' },
    // { id: 2005, name: 'Reebok Club C', price: '₹7,999', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80', brand: 'Reebok', type: 'Lifestyle', size: 'UK 6' },
    // { id: 2006, name: 'New Balance 327', price: '₹8,999', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80', brand: 'New Balance', type: 'Lifestyle', size: 'UK 7' },
  ],
  'Kids Shoes': [
    // { id: 2101, name: 'Nike Kids Revolution', price: '₹4,999', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80', brand: 'Nike', type: 'Sports', size: 'UK 1' },
    // { id: 2102, name: 'Adidas Kids Runfalcon', price: '₹3,999', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80', brand: 'Adidas', type: 'Running', size: 'UK 2' },
    // { id: 2103, name: 'Puma Kids Softride', price: '₹3,499', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80', brand: 'Puma', type: 'Sports', size: 'UK 3' },
    { id: 2104, name: 'Reebok Kids Classic', price: '₹2,999', image: '/images/shoes-re.png', brand: 'Reebok', type: 'Casual', size: 'UK 2' },
    { id: 2105, name: 'New Balance Kids 574', price: '₹4,499', image: '/images/shoes-cl.png', brand: 'New Balance', type: 'Lifestyle', size: 'UK 3' },
    // { id: 2106, name: 'Converse Kids Chuck', price: '₹3,999', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80', brand: 'Converse', type: 'Casual', size: 'UK 2' },
  ],
  
  // Grocery Collections
  'Fresh Fruits': [
    { id: 2201, name: 'Organic Apples (1kg)', price: '₹299', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80', category: 'Organic', origin: 'Himachal Pradesh' },
    { id: 2202, name: 'Bananas (1 dozen)', price: '₹89', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80', category: 'Fresh', origin: 'Maharashtra' },
    { id: 2203, name: 'Oranges (1kg)', price: '₹199', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&q=80', category: 'Fresh', origin: 'Nagpur' },
    { id: 2204, name: 'Grapes (500g)', price: '₹149', image: '/images/fruits-gra.png', category: 'Fresh', origin: 'Nashik' },
    { id: 2205, name: 'Mangoes (1kg)', price: '₹399', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80', category: 'Seasonal', origin: 'Alphonso' },
    { id: 2206, name: 'Pomegranate (1kg)', price: '₹249', image: '/images/fruits-promo.png', category: 'Fresh', origin: 'Kashmir' },
  ],
  'Fresh Vegetables': [
    { id: 2301, name: 'Organic Tomatoes (1kg)', price: '₹79', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=400&q=80', category: 'Organic', origin: 'Local Farm' },
    { id: 2302, name: 'Rice (2kg)', price: '₹59', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80', category: 'Fresh', origin: 'Maharashtra' },
    { id: 2303, name: 'Potatoes (2kg)', price: '₹69', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80', category: 'Fresh', origin: 'Punjab' },
    { id: 2304, name: 'Carrots (1kg)', price: '₹49', image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=400&q=80', category: 'Fresh', origin: 'Himachal Pradesh' },
    { id: 2305, name: 'Capsicum (500g)', price: '₹89', image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=400&q=80', category: 'Fresh', origin: 'Local Farm' },
    { id: 2306, name: 'Cucumber (1kg)', price: '₹39', image: '/images/vegetable-cum.png', category: 'Fresh', origin: 'Local Farm' },
  ],
  'Dairy & Eggs': [
    { id: 2401, name: 'Amul Gold Milk (1L)', price: '₹72', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80', category: 'Dairy', brand: 'Amul' },
    { id: 2402, name: 'Organic Eggs (12 pieces)', price: '₹149', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80', category: 'Eggs', brand: 'Organic Farm' },
    // { id: 2403, name: 'Amul Butter (100g)', price: '₹55', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80', category: 'Dairy', brand: 'Amul' },
    // { id: 2404, name: 'Greek Yogurt (500g)', price: '₹199', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80', category: 'Dairy', brand: 'Epigamia' },
    // { id: 2405, name: 'Cheese Slices (200g)', price: '₹189', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80', category: 'Dairy', brand: 'Amul' },
    // { id: 2406, name: 'Paneer (250g)', price: '₹129', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80', category: 'Dairy', brand: 'Local Farm' },
  ],
};



// Sample orders for tracking
const sampleOrders = [
  {
    orderId: 'ORD001',
    email: 'john@example.com',
    product: 'Men Jeans',
    price: '$40',
    status: 'In Transit',
    estimatedDelivery: '2024-01-15',
    currentLocation: 'Mumbai Distribution Center',
    coordinates: { lat: 19.0760, lng: 72.8777 },
    orderDate: '2024-01-10',
    trackingSteps: [
      { step: 'Order Placed', completed: true, date: '2024-01-10' },
      { step: 'Processing', completed: true, date: '2024-01-11' },
      { step: 'Shipped', completed: true, date: '2024-01-12' },
      { step: 'In Transit', completed: true, date: '2024-01-13' },
      { step: 'Out for Delivery', completed: false, date: '2024-01-15' },
      { step: 'Delivered', completed: false, date: '2024-01-15' }
    ]
  },
  {
    orderId: 'ORD002',
    email: 'sarah@example.com',
    product: 'Women Dress',
    price: '$35',
    status: 'Delivered',
    estimatedDelivery: '2024-01-12',
    currentLocation: 'Delivered to Customer',
    coordinates: { lat: 28.7041, lng: 77.1025 },
    orderDate: '2024-01-08',
    trackingSteps: [
      { step: 'Order Placed', completed: true, date: '2024-01-08' },
      { step: 'Processing', completed: true, date: '2024-01-09' },
      { step: 'Shipped', completed: true, date: '2024-01-10' },
      { step: 'In Transit', completed: true, date: '2024-01-11' },
      { step: 'Out for Delivery', completed: true, date: '2024-01-12' },
      { step: 'Delivered', completed: true, date: '2024-01-12' }
    ]
  },
  {
    orderId: 'ORD003',
    email: 'mike@example.com',
    product: 'Kids Shirt',
    price: '$15',
    status: 'Processing',
    estimatedDelivery: '2024-01-18',
    currentLocation: 'Warehouse',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    orderDate: '2024-01-13',
    trackingSteps: [
      { step: 'Order Placed', completed: true, date: '2024-01-13' },
      { step: 'Processing', completed: true, date: '2024-01-14' },
      { step: 'Shipped', completed: false, date: '2024-01-15' },
      { step: 'In Transit', completed: false, date: '2024-01-16' },
      { step: 'Out for Delivery', completed: false, date: '2024-01-17' },
      { step: 'Delivered', completed: false, date: '2024-01-18' }
    ]
  },
  {
    orderId: 'ORD004',
    email: 'emma@example.com',
    product: 'Men T-Shirt',
    price: '$20',
    status: 'Delivered',
    estimatedDelivery: '2024-01-10',
    currentLocation: 'Delivered to Customer',
    coordinates: { lat: 13.0827, lng: 80.2707 },
    orderDate: '2024-01-05',
    trackingSteps: [
      { step: 'Order Placed', completed: true, date: '2024-01-05' },
      { step: 'Processing', completed: true, date: '2024-01-06' },
      { step: 'Shipped', completed: true, date: '2024-01-07' },
      { step: 'In Transit', completed: true, date: '2024-01-08' },
      { step: 'Out for Delivery', completed: true, date: '2024-01-09' },
      { step: 'Delivered', completed: true, date: '2024-01-10' }
    ]
  },
  {
    orderId: 'ORD005',
    email: 'david@example.com',
    product: 'Women Jacket',
    price: '$55',
    status: 'In Transit',
    estimatedDelivery: '2024-01-16',
    currentLocation: 'Chennai Hub',
    coordinates: { lat: 13.0827, lng: 80.2707 },
    orderDate: '2024-01-11',
    trackingSteps: [
      { step: 'Order Placed', completed: true, date: '2024-01-11' },
      { step: 'Processing', completed: true, date: '2024-01-12' },
      { step: 'Shipped', completed: true, date: '2024-01-13' },
      { step: 'In Transit', completed: true, date: '2024-01-14' },
      { step: 'Out for Delivery', completed: false, date: '2024-01-16' },
      { step: 'Delivered', completed: false, date: '2024-01-16' }
    ]
  },
  {
    orderId: 'ORD006',
    email: 'lisa@example.com',
    product: 'Kids Hoodie',
    price: '$20',
    status: 'Shipped',
    estimatedDelivery: '2024-01-17',
    currentLocation: 'Kolkata Distribution',
    coordinates: { lat: 22.5726, lng: 88.3639 },
    orderDate: '2024-01-12',
    trackingSteps: [
      { step: 'Order Placed', completed: true, date: '2024-01-12' },
      { step: 'Processing', completed: true, date: '2024-01-13' },
      { step: 'Shipped', completed: true, date: '2024-01-14' },
      { step: 'In Transit', completed: false, date: '2024-01-15' },
      { step: 'Out for Delivery', completed: false, date: '2024-01-16' },
      { step: 'Delivered', completed: false, date: '2024-01-17' }
    ]
  },
  {
    orderId: 'ORD007',
    email: 'alex@example.com',
    product: 'Men Shorts',
    price: '$25',
    status: 'Delivered',
    estimatedDelivery: '2024-01-09',
    currentLocation: 'Delivered to Customer',
    coordinates: { lat: 17.3850, lng: 78.4867 },
    orderDate: '2024-01-04',
    trackingSteps: [
      { step: 'Order Placed', completed: true, date: '2024-01-04' },
      { step: 'Processing', completed: true, date: '2024-01-05' },
      { step: 'Shipped', completed: true, date: '2024-01-06' },
      { step: 'In Transit', completed: true, date: '2024-01-07' },
      { step: 'Out for Delivery', completed: true, date: '2024-01-08' },
      { step: 'Delivered', completed: true, date: '2024-01-09' }
    ]
  },
  {
    orderId: 'ORD008',
    email: 'sophia@example.com',
    product: 'Women Top',
    price: '$25',
    status: 'Processing',
    estimatedDelivery: '2024-01-19',
    currentLocation: 'Warehouse',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    orderDate: '2024-01-14',
    trackingSteps: [
      { step: 'Order Placed', completed: true, date: '2024-01-14' },
      { step: 'Processing', completed: true, date: '2024-01-15' },
      { step: 'Shipped', completed: false, date: '2024-01-16' },
      { step: 'In Transit', completed: false, date: '2024-01-17' },
      { step: 'Out for Delivery', completed: false, date: '2024-01-18' },
      { step: 'Delivered', completed: false, date: '2024-01-19' }
    ]
  }
];

// Sample users for authentication
const sampleUsers = [
  {
    id: 1,
    email: 'john@example.com',
    password: 'john123',
    name: 'John Smith',
    role: 'customer',
    avatar: '👨‍💼'
  },
  {
    id: 2,
    email: 'sarah@example.com',
    password: 'sarah123',
    name: 'Sarah Johnson',
    role: 'customer',
    avatar: '👩‍💼'
  },
  {
    id: 3,
    email: 'admin@ecommerce.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    avatar: '👨‍💻'
  },
  {
    id: 4,
    email: 'mike@example.com',
    password: 'mike123',
    name: 'Mike Wilson',
    role: 'customer',
    avatar: '👨‍🎓'
  },
  {
    id: 5,
    email: 'emma@example.com',
    password: 'emma123',
    name: 'Emma Davis',
    role: 'customer',
    avatar: '👩‍🎨'
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<any>(null);
  const [checkoutProduct, setCheckoutProduct] = useState<any>(null);
  const [showTracking, setShowTracking] = useState(false);
  const [trackingOrder, setTrackingOrder] = useState<any>(null);
  const [showMyOrders, setShowMyOrders] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showSignup, setShowSignup] = useState(false);
  const [trackingForm, setTrackingForm] = useState({
    orderId: '',
    email: ''
  });
  const [cart, setCart] = useState<any[]>([]);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    bankName: '',
    accountNumber: '',
    ifscCode: ''
  });
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [signupError, setSignupError] = useState('');
  const [isSignupLoading, setIsSignupLoading] = useState(false);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
    setShowLogin(false);
    setShowCart(false);
    setShowCollection(false);
    setShowCheckout(false);
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setShowLogin(false);
    setShowCart(false);
    setShowCollection(false);
    setShowCheckout(false);
  };

  const handleViewCollection = (product: any) => {
    setSelectedCollection(product);
    setShowCollection(true);
    setSelectedProduct(null);
    setShowLogin(false);
    setShowCart(false);
    setShowCheckout(false);
  };

  const handleBuyNow = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setCheckoutProduct(product);
    setShowCheckout(true);
    setSelectedProduct(null);
    setShowLogin(false);
    setShowCart(false);
    setShowCollection(false);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    setShowLogin(false);
    setShowSignup(false);
    setShowCart(false);
    setShowCollection(false);
    setShowCheckout(false);
    setShowTracking(false);
    setShowMyOrders(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setSelectedProduct(null);
    setShowCart(false);
    setShowCollection(false);
    setShowCheckout(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setSelectedProduct(null);
    setShowLogin(false);
    setShowCollection(false);
    setShowCheckout(false);
  };

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    if (cart.length < 3) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    } else {
      alert('Cart is full! Maximum 3 items allowed.');
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! Thank you for your purchase.');
    setShowCheckout(false);
    setCheckoutProduct(null);
  };

  const handleCheckoutInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCheckoutForm({
      ...checkoutForm,
      [e.target.name]: e.target.value
    });
  };

  const handleTrackingClick = () => {
    setShowTracking(true);
    setSelectedProduct(null);
    setShowLogin(false);
    setShowCart(false);
    setShowCollection(false);
    setShowCheckout(false);
  };

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const order = sampleOrders.find(
      o => o.orderId === trackingForm.orderId && o.email === trackingForm.email
    );
    
    if (order) {
      setTrackingOrder(order);
    } else {
      alert('Order not found. Please check your Order ID and Email.');
    }
  };

  const handleTrackingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingForm({
      ...trackingForm,
      [e.target.name]: e.target.value
    });
  };

  const handleMyOrdersClick = () => {
    setShowMyOrders(true);
    setSelectedProduct(null);
    setShowLogin(false);
    setShowCart(false);
    setShowCollection(false);
    setShowCheckout(false);
    setShowTracking(false);
  };

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setLoginError('');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = sampleUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      setShowLogin(false);
      setLoginForm({ email: '', password: '' });
      alert(`Welcome back, ${user.name}! 🎉`);
    } else {
      setLoginError('Invalid email or password. Please try again.');
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setShowLogin(false);
    setShowCart(false);
    setShowMyOrders(false);
    setShowTracking(false);
    setShowCheckout(false);
    alert('You have been logged out successfully. 👋');
  };

  const checkAuth = () => {
    if (!isAuthenticated) {
      setShowLogin(true);
      setShowCart(false);
      setShowMyOrders(false);
      setShowTracking(false);
      setShowCheckout(false);
      return false;
    }
    return true;
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(loginForm.email, loginForm.password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    setShowCart(false);
    setShowMyOrders(false);
    setShowTracking(false);
    setShowCheckout(false);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignupLoading(true);
    setSignupError('');

    // Validate passwords match
    if (signupForm.password !== signupForm.confirmPassword) {
      setSignupError('Passwords do not match!');
      setIsSignupLoading(false);
      return;
    }

    // Check if email already exists
    const existingUser = sampleUsers.find(u => u.email === signupForm.email);
    if (existingUser) {
      setSignupError('Email already exists! Please use a different email or login.');
      setIsSignupLoading(false);
      return;
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create new user
    const newUser = {
      id: sampleUsers.length + 1,
      email: signupForm.email,
      password: signupForm.password,
      name: `${signupForm.firstName} ${signupForm.lastName}`,
      role: 'customer',
      avatar: '👤'
    };

    // Add to sample users (in real app, this would go to database)
    sampleUsers.push(newUser);

    // Auto-login the new user
    setIsAuthenticated(true);
    setCurrentUser(newUser);
    setShowSignup(false);
    setSignupForm({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    alert(`Welcome ${newUser.name}! Your account has been created successfully! 🎉`);
    
    setIsSignupLoading(false);
  };

  const handleSignupInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBackToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
    setSignupForm({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    setSignupError('');
  };

  // Checkout Page
  if (showCheckout && checkoutProduct) {
  return (
      <div className="ecom-app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <div className="logo">🛍️</div>
              <h1 className="website-name">Your Store</h1>
            </div>
            <h2>Categories</h2>
            <div className="sidebar-buttons">
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
              <button className="cart-btn" onClick={handleCartClick}>
                Cart ({cart.length}/3)
              </button>
            </div>
          </div>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="main-content">
          <div className="checkout-page">
            <button className="back-btn" onClick={handleBackToProducts}>
              ← Back to Products
            </button>
            <div className="checkout-container">
              <div className="checkout-header">
                <h1>Checkout</h1>
                <div className="checkout-product-summary">
                  <img src={checkoutProduct.image} alt={checkoutProduct.name} />
                  <div>
                    <h3>{checkoutProduct.name}</h3>
                    <p className="checkout-price">{checkoutProduct.price}</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleCheckoutSubmit} className="checkout-form">
                <div className="form-section">
                  <h2>Personal Information</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={checkoutForm.firstName}
                        onChange={handleCheckoutInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={checkoutForm.lastName}
                        onChange={handleCheckoutInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={checkoutForm.email}
                        onChange={handleCheckoutInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={checkoutForm.phone}
                        onChange={handleCheckoutInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h2>Shipping Address</h2>
                  <div className="form-group">
                    <label htmlFor="address">Street Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={checkoutForm.address}
                      onChange={handleCheckoutInputChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={checkoutForm.city}
                        onChange={handleCheckoutInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">State *</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={checkoutForm.state}
                        onChange={handleCheckoutInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="zipCode">ZIP Code *</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={checkoutForm.zipCode}
                        onChange={handleCheckoutInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h2>Payment Information</h2>
                  <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method *</label>
                                         <select
                       id="paymentMethod"
                       name="paymentMethod"
                       value={checkoutForm.paymentMethod}
                       onChange={handleCheckoutInputChange}
                       required
                     >
                       <option value="card">💳 Credit/Debit Card</option>
                       <option value="cash">💰 Cash on Delivery</option>
                       <option value="upi">📱 UPI Payment</option>
                       <option value="netbanking">🏦 Net Banking</option>
                       <option value="wallet">👛 Digital Wallet</option>
                     </select>
                  </div>
                  {checkoutForm.paymentMethod === 'card' && (
                    <>
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number *</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={checkoutForm.cardNumber}
                          onChange={handleCheckoutInputChange}
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="expiryDate">Expiry Date *</label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={checkoutForm.expiryDate}
                            onChange={handleCheckoutInputChange}
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="cvv">CVV *</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={checkoutForm.cvv}
                            onChange={handleCheckoutInputChange}
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {checkoutForm.paymentMethod === 'upi' && (
                    <>
                      <div className="form-group">
                        <label htmlFor="upiId">UPI ID *</label>
                        <input
                          type="text"
                          id="upiId"
                          name="upiId"
                          value={checkoutForm.upiId}
                          onChange={handleCheckoutInputChange}
                          placeholder="your.upi@bank"
                          required
                        />
                      </div>
                    </>
                  )}
                                     {checkoutForm.paymentMethod === 'cash' && (
                     <div className="payment-info">
                       <p>💰 Cash on Delivery: Pay when you receive your order. No card details needed.</p>
                     </div>
                   )}
                   {checkoutForm.paymentMethod === 'netbanking' && (
                     <>
                       <div className="form-group">
                         <label htmlFor="bankName">Select Bank *</label>
                         <select
                           id="bankName"
                           name="bankName"
                           value={checkoutForm.bankName}
                           onChange={handleCheckoutInputChange}
                           required
                         >
                           <option value="">Select your bank</option>
                           <option value="sbi">State Bank of India</option>
                           <option value="hdfc">HDFC Bank</option>
                           <option value="icici">ICICI Bank</option>
                           <option value="axis">Axis Bank</option>
                           <option value="kotak">Kotak Mahindra Bank</option>
                           <option value="pnb">Punjab National Bank</option>
                           <option value="canara">Canara Bank</option>
                           <option value="union">Union Bank of India</option>
                         </select>
                       </div>
                       <div className="form-group">
                         <label htmlFor="accountNumber">Account Number *</label>
                         <input
                           type="text"
                           id="accountNumber"
                           name="accountNumber"
                           value={checkoutForm.accountNumber}
                           onChange={handleCheckoutInputChange}
                           placeholder="Enter your account number"
                           required
                         />
                       </div>
                       <div className="form-group">
                         <label htmlFor="ifscCode">IFSC Code *</label>
                         <input
                           type="text"
                           id="ifscCode"
                           name="ifscCode"
                           value={checkoutForm.ifscCode}
                           onChange={handleCheckoutInputChange}
                           placeholder="Enter IFSC code"
                           required
                         />
                       </div>
                     </>
                   )}
                   {checkoutForm.paymentMethod === 'wallet' && (
                     <div className="payment-info">
                       <p>👛 Digital Wallet: You'll be redirected to your preferred wallet app (Paytm, PhonePe, Google Pay, etc.) for payment.</p>
                     </div>
                   )}
                </div>

                <div className="checkout-summary">
                  <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-item">
                      <span>Subtotal:</span>
                      <span>{checkoutProduct.price}</span>
                    </div>
                    <div className="summary-item">
                      <span>Shipping:</span>
                      <span>$5.00</span>
                    </div>
                    <div className="summary-item total">
                      <span>Total:</span>
                      <span>${parseInt(checkoutProduct.price.replace('$', '')) + 5}</span>
                    </div>
                  </div>
                  <button type="submit" className="place-order-btn">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Collection Page
  if (showCollection && selectedCollection) {
    const collectionItems = productCollections[selectedCollection.name as keyof typeof productCollections] || [];
    
    return (
      <div className="ecom-app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <div className="logo">🛍️</div>
              <h1 className="website-name">Your Store</h1>
            </div>
            <h2>Categories</h2>
            <div className="sidebar-buttons">
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
              <button className="my-orders-btn" onClick={handleMyOrdersClick}>My Orders</button>
              <button className="cart-btn" onClick={handleCartClick}>
                Cart ({cart.length}/3)
              </button>
            </div>
          </div>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="main-content">
          <div className="collection-page">
            <button className="back-btn" onClick={handleBackToProducts}>
              ← Back to Products
            </button>
            <div className="collection-header">
              <h1>{selectedCollection.name} Collection</h1>
              <p className="collection-description">{selectedCollection.description}</p>
            </div>
            <div className="collection-grid">
              {collectionItems.map((item) => (
                <div key={item.id} className="collection-item">
                  <img src={item.image} alt={item.name} />
                  <div className="collection-item-info">
                    <h3>{item.name}</h3>
                    <p className="collection-item-details">
                      <span className="color">Color: {item.color}</span>
                      <span className="fit">Fit: {item.fit}</span>
                      <span className="size">Size: {item.size}</span>
                    </p>
                    <p className="collection-item-price">{item.price}</p>
                    <div className="collection-item-actions">
                      <button 
                        className="add-to-cart-btn"
                        onClick={(e) => handleAddToCart(item, e)}
                      >
                        Add to Cart
                      </button>
                      <button 
                        className="buy-now-btn"
                        onClick={(e) => handleBuyNow(item, e)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Cart Page
  if (showCart) {
    return (
      <div className="ecom-app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <div className="logo">🛍️</div>
              <h1 className="website-name">Your Store</h1>
            </div>
            <h2>Categories</h2>
            <div className="sidebar-buttons">
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
              <button className="my-orders-btn" onClick={handleMyOrdersClick}>My Orders</button>
            </div>
          </div>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="main-content">
          <div className="cart-page">
            <button className="back-btn" onClick={handleBackToProducts}>
              ← Back to Products
            </button>
            <div className="cart-container">
              <h1>Shopping Cart ({cart.length}/3)</h1>
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty</p>
                  <button className="continue-shopping-btn" onClick={handleBackToProducts}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p className="cart-item-price">{item.price}</p>
                      </div>
                      <button 
                        className="remove-btn"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="cart-summary">
                    <div className="cart-total">
                      <h3>Total: ${cart.reduce((sum, item) => sum + parseInt(item.price.replace('$', '')), 0)}</h3>
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Login Page
  if (showLogin) {
    return (
      <div className="ecom-app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <div className="logo">🛍️</div>
              <h1 className="website-name">Your Store</h1>
            </div>
            <h2>Categories</h2>
            <div className="sidebar-buttons">
              <button className="login-btn">Login</button>
              <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
              <button className="my-orders-btn" onClick={handleMyOrdersClick}>My Orders</button>
              <button className="cart-btn" onClick={handleCartClick}>
                Cart ({cart.length}/3)
              </button>
            </div>
          </div>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="main-content">
          <div className="login-page">
            <button className="back-btn" onClick={handleBackToProducts}>
              ← Back to Products
            </button>
            <div className="login-container">
              <h1>Login</h1>
              <form onSubmit={handleLoginSubmit} className="login-form">
                {loginError && (
                  <div className="login-error">
                    {loginError}
                  </div>
                )}
                {isLoading && (
                  <div className="login-loading">
                    Authenticating... Please wait
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={loginForm.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your password"
                    disabled={isLoading}
                  />
                </div>
                <button 
                  type="submit" 
                  className={`login-submit-btn ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <div className="sample-users">
                <h3>Sample Users for Testing:</h3>
                <ul>
                  <li><strong>Customer:</strong> john@example.com / john123</li>
                  <li><strong>Customer:</strong> sarah@example.com / sarah123</li>
                  <li><strong>Admin:</strong> admin@ecommerce.com / admin123</li>
                  <li><strong>Customer:</strong> mike@example.com / mike123</li>
                  <li><strong>Customer:</strong> emma@example.com / emma123</li>
                </ul>
              </div>
              <p className="login-footer">
                Don't have an account? <a href="javascript:void(0)" className="signup-link" onClick={handleSignupClick}>Sign up</a>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Signup Page
  if (showSignup) {
    return (
      <div className="ecom-app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <div className="logo">🛍️</div>
              <h1 className="website-name">Your Store</h1>
            </div>
            <h2>Categories</h2>
            <div className="sidebar-buttons">
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
              <button className="my-orders-btn" onClick={checkAuth}>My Orders</button>
              <button className="cart-btn" onClick={handleCartClick}>
                Cart ({cart.length}/3)
              </button>
            </div>
          </div>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="main-content">
          <div className="signup-page">
            <button className="back-btn" onClick={handleBackToLogin}>
              ← Back to Login
            </button>
            <div className="signup-container">
              <h1>Create Account</h1>
              <form onSubmit={handleSignupSubmit} className="signup-form">
                {signupError && (
                  <div className="signup-error">
                    {signupError}
                  </div>
                )}
                {isSignupLoading && (
                  <div className="signup-loading">
                    Creating your account... Please wait
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={signupForm.firstName}
                      onChange={handleSignupInputChange}
                      required
                      placeholder="Enter your first name"
                      disabled={isSignupLoading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={signupForm.lastName}
                      onChange={handleSignupInputChange}
                      required
                      placeholder="Enter your last name"
                      disabled={isSignupLoading}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={signupForm.email}
                    onChange={handleSignupInputChange}
                    required
                    placeholder="Enter your email address"
                    disabled={isSignupLoading}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input
                      type="password"
                    id="password"
                    name="password"
                    value={signupForm.password}
                    onChange={handleSignupInputChange}
                    required
                    placeholder="Create a password"
                    disabled={isSignupLoading}
                    minLength={6}
                  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password *</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={signupForm.confirmPassword}
                      onChange={handleSignupInputChange}
                      required
                      placeholder="Confirm your password"
                      disabled={isSignupLoading}
                      minLength={6}
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className={`signup-submit-btn ${isSignupLoading ? 'loading' : ''}`}
                  disabled={isSignupLoading}
                >
                  {isSignupLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>
              <p className="signup-footer">
                Already have an account? <a href="javascript:void(0)" className="login-link" onClick={handleBackToLogin}>Sign in</a>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Tracking Page
  if (showTracking) {
  return (
      <div className="ecom-app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <div className="logo">🛍️</div>
              <h1 className="website-name">Your Store</h1>
            </div>
            <h2>Categories</h2>
            <div className="sidebar-buttons">
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
              <button className="cart-btn" onClick={handleCartClick}>
                Cart ({cart.length}/3)
              </button>
            </div>
          </div>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="main-content">
          <div className="tracking-page">
            <button className="back-btn" onClick={handleBackToProducts}>
              ← Back to Products
            </button>
            <div className="tracking-container">
              <h1>Track Your Order</h1>
              {!trackingOrder ? (
                <form onSubmit={handleTrackingSubmit} className="tracking-form">
                  <div className="form-group">
                    <label htmlFor="orderId">Order ID *</label>
                    <input
                      type="text"
                      id="orderId"
                      name="orderId"
                      value={trackingForm.orderId}
                      onChange={handleTrackingInputChange}
                      placeholder="Enter your Order ID (e.g., ORD001)"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={trackingForm.email}
                      onChange={handleTrackingInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <button type="submit" className="track-order-btn">
                    Track Order
                  </button>
                  <div className="sample-orders">
                    <h3>Sample Orders for Testing:</h3>
                    <ul>
                      <li>Order ID: ORD001, Email: john@example.com</li>
                      <li>Order ID: ORD002, Email: sarah@example.com</li>
                      <li>Order ID: ORD003, Email: mike@example.com</li>
                    </ul>
                  </div>
                </form>
              ) : (
                <div className="tracking-result">
                  <div className="order-info">
                    <h2>Order Details</h2>
                    <div className="order-details">
                      <p><strong>Order ID:</strong> {trackingOrder.orderId}</p>
                      <p><strong>Product:</strong> {trackingOrder.product}</p>
                      <p><strong>Status:</strong> <span className={`status ${trackingOrder.status.toLowerCase().replace(' ', '-')}`}>{trackingOrder.status}</span></p>
                      <p><strong>Estimated Delivery:</strong> {trackingOrder.estimatedDelivery}</p>
                      <p><strong>Current Location:</strong> {trackingOrder.currentLocation}</p>
                    </div>
                  </div>
                  
                  <div className="tracking-timeline">
                    <h3>Tracking Timeline</h3>
                    <div className="timeline">
                      {trackingOrder.trackingSteps.map((step, index) => (
                        <div key={index} className={`timeline-item ${step.completed ? 'completed' : ''}`}>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <h4>{step.step}</h4>
                            <p>{step.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="map-container">
                    <h3>Live Location</h3>
                    <div className="custom-map">
                      <div className="map-placeholder">
                        <div className="map-icon">🗺️</div>
                        <h4>Order Location</h4>
                        <p className="location-details">
                          <strong>Coordinates:</strong> {trackingOrder.coordinates.lat}°N, {trackingOrder.coordinates.lng}°E
                        </p>
                        <p className="location-details">
                          <strong>Location:</strong> {trackingOrder.currentLocation}
                        </p>
                        <div className="map-actions">
                          <a 
                            href={`https://www.google.com/maps?q=${trackingOrder.coordinates.lat},${trackingOrder.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
                            className="open-maps-btn"
                          >
                            Open in Google Maps
                          </a>
                          <button className="refresh-location-btn">
                            Refresh Location
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="map-note">📍 Current location: {trackingOrder.currentLocation}</p>
                  </div>

                  <button 
                    className="track-another-btn"
                    onClick={() => {
                      setTrackingOrder(null);
                      setTrackingForm({ orderId: '', email: '' });
                    }}
                  >
                    Track Another Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // My Orders Page
  if (showMyOrders) {
    return (
      <div className="ecom-app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <div className="logo">🛍️</div>
              <h1 className="website-name">Your Store</h1>
            </div>
            <h2>Categories</h2>
            <div className="sidebar-buttons">
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
              <button className="my-orders-btn" onClick={handleMyOrdersClick}>My Orders</button>
              <button className="cart-btn" onClick={handleCartClick}>
                Cart ({cart.length}/3)
              </button>
            </div>
          </div>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="main-content">
          <div className="my-orders-page">
            <button className="back-btn" onClick={handleBackToProducts}>
              ← Back to Products
            </button>
            <div className="my-orders-container">
              <h1>My Orders</h1>
              <div className="orders-summary">
                <div className="summary-card">
                  <h3>Total Orders</h3>
                  <p className="summary-number">{sampleOrders.length}</p>
                </div>
                <div className="summary-card">
                  <h3>Delivered</h3>
                  <p className="summary-number">{sampleOrders.filter(order => order.status === 'Delivered').length}</p>
                </div>
                <div className="summary-card">
                  <h3>In Transit</h3>
                  <p className="summary-number">{sampleOrders.filter(order => order.status === 'In Transit').length}</p>
                </div>
                <div className="summary-card">
                  <h3>Processing</h3>
                  <p className="summary-number">{sampleOrders.filter(order => order.status === 'Processing').length}</p>
                </div>
              </div>
              <div className="orders-list">
                {sampleOrders.map((order) => (
                  <div key={order.orderId} className="order-card">
                    <div className="order-header">
                      <div className="order-id-section">
                        <h3>Order #{order.orderId}</h3>
                        <p className="order-date">Ordered on {order.orderDate}</p>
                      </div>
                      <div className="order-status-section">
                        <span className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                          {order.status}
                        </span>
                        <p className="estimated-delivery">Est. Delivery: {order.estimatedDelivery}</p>
                      </div>
                    </div>
                    <div className="order-details">
                      <div className="product-info">
                        <h4>{order.product}</h4>
                        <p className="product-price">{order.price}</p>
                        <p className="current-location">📍 {order.currentLocation}</p>
                      </div>
                      <div className="order-actions">
                        <button 
                          className="track-order-btn-small"
                          onClick={() => {
                            setTrackingOrder(order);
                            setShowTracking(true);
                            setShowMyOrders(false);
                          }}
                        >
                          Track Order
                        </button>
                        <button className="view-details-btn">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Product Detail Page
  if (selectedProduct) {
    return (
      <div className="ecom-app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <div className="logo">🛍️</div>
              <h1 className="website-name">Your Store</h1>
            </div>
            <h2>Categories</h2>
            <div className="sidebar-buttons">
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
              <button className="my-orders-btn" onClick={handleMyOrdersClick}>My Orders</button>
              <button className="cart-btn" onClick={handleCartClick}>
                Cart ({cart.length}/3)
              </button>
            </div>
          </div>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="main-content">
          <div className="product-detail">
            <button className="back-btn" onClick={handleBackToProducts}>
              ← Back to Products
            </button>
            <div className="product-detail-content">
              <div className="product-detail-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="product-detail-info">
                <h1>{selectedProduct.name}</h1>
                <p className="product-description">{selectedProduct.description}</p>
                <p className="product-price">{selectedProduct.price}</p>
                
                
                
                <div className="product-detail-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={(e) => handleAddToCart(selectedProduct, e)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="view-collection-btn"
                    onClick={() => handleViewCollection(selectedProduct)}
                  >
                    View Collection
                  </button>
                  <button 
                    className="buy-now-btn"
                    onClick={(e) => handleBuyNow(selectedProduct, e)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Home Page
  if (!selectedCategory) {
    return (
      <div className="ecom-app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <div className="logo">🛍️</div>
              <h1 className="website-name">Your Store</h1>
            </div>
            <h2>Categories</h2>
            <div className="sidebar-buttons">
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
              <button className="my-orders-btn" onClick={handleMyOrdersClick}>My Orders</button>
              <button className="cart-btn" onClick={handleCartClick}>
                Cart ({cart.length}/3)
              </button>
            </div>
          </div>
          <ul>
            <li className="active" onClick={() => handleCategoryClick('')}>🏠 Home</li>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="main-content">
          <div className="main-header">
            <div className="main-logo-section">
              <div className="main-logo">🛍️</div>
              <h1 className="main-website-name">Your Store</h1>
            </div>
            <p className="main-tagline">Discover Amazing Products for Everyone</p>
          </div>
          
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-content">
              <h1>Welcome to Your Store</h1>
              <p>Your one-stop destination for fashion, electronics, footwear, and fresh groceries</p>
              <button className="shop-now-btn" onClick={() => handleCategoryClick('Men')}>
                Shop Now
              </button>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="featured-categories">
            <h2>Shop by Category</h2>
            <div className="category-grid">
              {categories.map((cat) => (
                <div 
                  key={cat} 
                  className="category-card"
                  onClick={() => handleCategoryClick(cat)}
                >
                  <div className="category-icon">
                    {cat === 'Men' ? '👔' : 
                     cat === 'Women' ? '👗' : 
                     cat === 'Kids' ? '👶' : 
                     cat === 'Electronics' ? '📱' : 
                     cat === 'Footwear' ? '👟' : 
                     cat === 'Grocery' ? '🛒' : '🛍️'}
                  </div>
                  <h3>{cat}</h3>
                  <p>Explore {cat.toLowerCase()} products</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-grid">
              {products.slice(0, 6).map((product) => (
                <div 
                  className="product-card featured" 
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                >
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <div className="product-actions">
                    <button 
                      className="add-to-cart-btn"
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="buy-now-btn"
                      onClick={(e) => handleBuyNow(product, e)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Offers */}
          <div className="special-offers">
            <h2>Special Offers</h2>
            <div className="offers-grid">
              <div 
                className="offer-card clickable"
                onClick={() => handleCategoryClick('Men')}
                style={{ cursor: 'pointer' }}
              >
                <h3>🎉 New Arrivals</h3>
                <p>Get 20% off on latest collections</p>
                <button onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryClick('Men');
                }}>Shop Now</button>
              </div>
              <div 
                className="offer-card clickable"
                onClick={() => handleCategoryClick('Electronics')}
                style={{ cursor: 'pointer' }}
              >
                <h3>⚡ Flash Sale</h3>
                <p>Electronics up to 40% off</p>
                <button onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryClick('Electronics');
                }}>Shop Now</button>
              </div>
              <div 
                className="offer-card clickable"
                onClick={() => handleCategoryClick('Grocery')}
                style={{ cursor: 'pointer' }}
              >
                <h3>🌱 Fresh Groceries</h3>
                <p>Organic products at best prices</p>
                <button onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryClick('Grocery');
                }}>Shop Now</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Main Product List Page
  return (
    <div className="ecom-app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-section">
            <div className="logo">🛍️</div>
            <h1 className="website-name">Your Store</h1>
          </div>
          <h2>Categories</h2>
          <div className="sidebar-buttons">
            <button className="login-btn" onClick={handleLoginClick}>Login</button>
            <button className="tracking-btn" onClick={handleTrackingClick}>Track Order</button>
            <button className="my-orders-btn" onClick={handleMyOrdersClick}>My Orders</button>
            <button className="cart-btn" onClick={handleCartClick}>
              Cart ({cart.length}/3)
            </button>
          </div>
        </div>
        <ul>
          <li onClick={() => handleCategoryClick('')}>🏠 Home</li>
          {categories.map((cat) => (
            <li
              key={cat}
              className={cat === selectedCategory ? 'active' : ''}
              onClick={() => handleCategoryClick(cat)}
              style={{ cursor: 'pointer' }}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>
      <main className="main-content">
        <div className="main-header">
          <div className="main-logo-section">
            <div className="main-logo">🛍️</div>
            <h1 className="main-website-name">Your Store</h1>
          </div>
          <p className="main-tagline">Discover Amazing Products for Everyone</p>
        </div>
        <h2 className="category-title">
          {selectedCategory === 'Electronics' ? 'Electronics & Gadgets' :
           selectedCategory === 'Footwear' ? 'Footwear & Shoes' :
           selectedCategory === 'Grocery' ? 'Fresh Groceries' :
           `${selectedCategory} Clothing`}
        </h2>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div 
              className="product-card" 
              key={product.id}
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <div className="product-actions">
                <button 
                  className="add-to-cart-btn"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  Add to Cart
                </button>
                <button 
                  className="view-collection-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewCollection(product);
                  }}
                >
                  View Collection
                </button>
                <button 
                  className="buy-now-btn"
                  onClick={(e) => handleBuyNow(product, e)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
