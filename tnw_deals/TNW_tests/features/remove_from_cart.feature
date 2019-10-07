@remove
Feature: TNW Deals

Scenario: Remove from cart test
Given Open main page
Then Open business category
When Choose random product
Then Remove product from cart
Then The notice should be "Your cart is empty. Continue Shopping!"