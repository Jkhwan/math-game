@player1_lives = 3
@player2_lives = 3
@current_player = 1

def check_lives
	return ((@player1_lives > 0) && (@player2_lives > 0)) ? true : false
end

def get_answer(operator, x, y)
	if operator == 1
		operator = ' + '
	elsif operator == 2
		operator = ' - '
	else
		operator = ' x '
	end
	puts "Player #{@current_player}: What does #{x}#{operator}#{y} equal?"
	gets.chomp.to_i
end

def switch_player
	if @current_player == 1
		@current_player = 2
		puts "You have #{@player1_lives} lives remaining"
	else
		@current_player = 1
		puts "You have #{@player2_lives} lives remaining"
	end
end

def calculate_answer(op, x, y)
	if op == 1
		return x + y
	elsif op == 2
		return x - y
	else
		return x * y
	end
end

def announce_winner
	(@player1_lives == 0) ? 'Player 2 wins!' : 'Player 1 wins!'
end

def check_answer(ans, right_ans)
	if ans == right_ans
		puts "Correct."
	else
		if @current_player == 1
			@player1_lives -= 1
			puts "Wrong! #{@player1_lives} lives left!"
		else
			@player2_lives -= 1
			puts "Wrong! #{@player2_lives} lives left!"
		end
	end
end

loop do

	x = rand(20) + 1
	y = rand(20) + 1
	op = rand(3) + 1

	right_answer = calculate_answer(op, x, y)
	answer = get_answer(op, x, y)

	check_answer(answer, right_answer)
	switch_player

	break unless check_lives == true	
end
