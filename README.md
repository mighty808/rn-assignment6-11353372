# rn-assignment6-11353372
## Design Choices 
I used a combination of React Native components to implement the UI Design. I chose to use a FlatList to display the cart items, and a TouchableOpacity to handle the remove item functionality. I also used Ionicons to display the bag icon in the checkout bar.

## Data Storage
I used AsyncStorage to store the cart items. I implemented a function to load the cart items from storage when the component mounts and update the state accordingly. This allows the application to persist the cart items even when the user closes the app.

### Loading Cart Items
I implemented a function loadCartItems to load the cart items from storage when the component mounts. This function retrieves the cart items from storage and updates the state accordingly.

### Updating Cart Items
When the user removes an item from the cart, I update the cart items in storage using the AsyncStorage.setItem method.

## Screenshots
![photo_5773674723438346452_y](https://github.com/mighty808/rn-assignment6-11353372/assets/142548335/10e72dde-06c2-4840-b25c-75a06a5ea03c)
![photo_5773674723438346453_y](https://github.com/mighty808/rn-assignment6-11353372/assets/142548335/f36e51d6-ae4f-4332-86dd-6999846c04ae)
![photo_5773674723438346454_y](https://github.com/mighty808/rn-assignment6-11353372/assets/142548335/1bd0d17e-6f46-43d1-b355-0b80a8233034)
![photo_5773674723438346455_y](https://github.com/mighty808/rn-assignment6-11353372/assets/142548335/6aa31697-8ada-4ffc-af47-c73a4679401b)
