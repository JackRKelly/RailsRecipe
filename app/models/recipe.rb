class Recipe < ApplicationRecord
  validates :name, presence: true
  validates :image, presence: true
  validates :ingredients, presence: true
  validates :instructions, presence: true
end
