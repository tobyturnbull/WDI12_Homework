class BallController < ApplicationController
  def input
  end

  def result
    possible = ['Yes', 'No', 'Maybe']
    @answer = possible[rand(possible.length)]
  end
end