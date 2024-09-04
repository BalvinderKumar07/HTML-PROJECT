import random

# generate a random number between 1 and 100
number = random.randint(1, 100)

# initialize the number of guesses
num_guesses = 0

# loop until the user guesses the number
while True:
    # get the user's guess
    guess = int(input("Guess a number between 1 and 100: "))
    num_guesses += 1
    
    # check if the guess is correct
    if guess == number:
        print(f"Congratulations, you guessed the number in {num_guesses} guesses!")
        break
    
    # give the user a hint
    elif guess < number:
        print("Too low, try again.")
    else:
        print("Too high, try again.")
