class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.text :ingredients, array: true, null: false
      t.text :instruction, array: true, null: false
      t.string :image, default: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&w=1000&q=80"
      t.timestamps
    end
  end
end
