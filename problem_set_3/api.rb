require 'sinatra'
require 'json'

set :public_folder, 'public' 

get '/' do
        redirect '/index.html'
end