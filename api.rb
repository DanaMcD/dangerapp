require 'sinatra'
require 'json'
 

get '/loud_greetings/:word' do
	"#{params[:word]}!".upcase
end

get '/:nameA/loves/:nameB' do
	"#{params[:nameA].capitalize} loves #{params[:nameB].capitalize}!"
end

get '/shirts' do
	{shirts: [
		{ team: "M80s", size: "Small", quantity: "6", price: "15" },
		{ team: "Stunts", size: "Medium", quantity: "7", price: "15"},
		{ team: "Smashinistas", size: "Large", quantity: "2", price: "15"},
		{ team: "All_Stars", size: "XL", quantity: "0", price: "20"}

	]}.to_json
end