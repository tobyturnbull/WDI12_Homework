Rails.application.routes.draw do
 root :to => 'pages#home'
 get '/ball' => 'ball#input'
 get '/ball/result' => 'ball#result'
 get '/secnum' => 'secnum#input'
 get '/secnum/result' => 'secnum#result'
 get '/rps' => 'rps#input'
 get '/rps/result' => 'rps#result'

end
