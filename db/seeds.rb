9.times do |i|
  Recipe.create(
    {
      name: "Fruit Salad #{i + 1}",
      ingredients: ["Tomatoes", "Lettuce", "Croutons"],
      instruction: ["First put the lettuce in a bowl", "Put the tomatoes and croutons on the lettuce"],
      image: "https://i.pinimg.com/564x/e4/70/2c/e4702c7b40bf0d7acf656e13f2ce273b.jpg",
    }
  )
end
