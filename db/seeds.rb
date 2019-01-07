# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

murphy = User.create(email: 'murphy@potts.com', password: 'password', password_confirmation: 'password')

kate = User.create(email: 'kate@kate.com', password: 'password', password_confirmation: 'password')

yoda = Creature.create(name: 'Yoda', description: 'Yo yo yoda', user_id: murphy.id)
chewy = Creature.create(name: 'Chewy', description: 'Ch ch chewy', user_id: murphy.id)
r2 = Creature.create(name: 'R2', description: 'R R R2', user_id: murphy.id)


pikachu = Creature.create(name: 'Pikachu', description: 'Peeka', user_id: kate.id)
charzard = Creature.create(name: 'Charzard', description: 'Flamey', user_id: kate.id)
shmoda = Creature.create(name: 'Shmoda', description: 'Not yoda', user_id: kate.id)

