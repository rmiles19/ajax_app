namespace :pop do
  desc "Populate Products"
  task products: :environment do
    20.times do
      product = Product.create(names: Faker::Music.chord, price: '5.00', description: Faker::Seinfeld.quote)
    end
  end
end
