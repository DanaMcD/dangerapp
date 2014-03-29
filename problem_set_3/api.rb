require 'sinatra'
require 'json'
require 'sequel'

set :public_folder, 'public' 

get '/' do
        redirect '/index.html'
end

get '/cats' do
	db = Sequel.sqlite('development.db')
	cats = db[:cats].to_a
	response = {}
	response['cats'] = cats
	response.to_json
end

post '/cats' do
	data = JSON.parse(request.body.read.to_s)
    new_cat = data['cat']
	
	db = Sequel.sqlite('development.db')
	cats = db[:cats]
	cats.insert(:name => new_cat['name'], :age => new_cat['age'], :size => new_cat['size'])
    "Success!"
end