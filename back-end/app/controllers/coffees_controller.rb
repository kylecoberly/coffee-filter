class CoffeesController < ApplicationController
  def index
    @coffees = Coffee.all

    render json: { coffees: @coffees }
  end
end
