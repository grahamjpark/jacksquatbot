//1 hit, 2 bet, 3 stay
public int select_action() {
	//hard hand
	if (num_aces(my_hand) == 0) {
		if (get_amount(my_hand) <= 8) {
			return 1;
		}
		else if (get_amount(my_hand) == 9) {
			if (get_amount(dealer_hand) >= 3 && get_amount(dealer_hand) <= 6) {
				return 2; //double
			}
			else
				return 1;
		}
		else if (get_amount(my_hand) == 10) {
			if (get_amount(dealer_hand) >= 2 && get_amount(dealer_hand) <= 9) {
				return 2; //double
			}
			else
				return 1;
		}
		else if (get_amount(my_hand) == 11) {
			if (num_aces(dealer_hand)) {
				return 1;
			}
			if (get_amount(dealer_hand) >= 2 && get_amount(dealer_hand) <= 10) {
				return 2; //double
			}
			else
				return 1;
		}
		else if (get_amount(my_hand) == 12) {
			if (get_amount(dealer_hand) >= 2 && get_amount(dealer_hand) <= 3) {
				return 1; //hit
			}
			else if (get_amount(dealer_hand) >= 4 && get_amount(dealer_hand) <= 6) {
				return 3; //stand
			}
			else
				return 1;
		}
		else if (get_amount(my_hand) >= 13 && get_amount(my_hand) <= 16) {
			if (get_amount(dealer_hand) >= 2 && get_amount(dealer_hand) <= 6) {
				return 3; //stand
			}
			else
				return 1;
		}
		else 
			return 3; //Stand if you have 17-21
	} 
	//Soft hand
	else {
		if ((numcard('A', 0) == 1 && numcard('2', 0)) || 
			(numcard('A', 0) == 1 && numcard('3', 0))) {
			if (get_amount(dealer_hand) >= 5 && get_amount(dealer_hand) <= 6) {
				return 2; //double
			}
			else
				return 1;
		}
		else if ((numcard('A', 0) == 1 && numcard('4', 0)) || 
			(numcard('A', 0) == 1 && numcard('5', 0))) {
			if (get_amount(dealer_hand) >= 4 && get_amount(dealer_hand) <= 6) {
				return 2; //double
			}
			else
				return 1;
		}
		else if (numcard('A', 0) == 1 && numcard('6', 0)) {
			if (get_amount(dealer_hand) >= 3 && get_amount(dealer_hand) <= 6) {
				return 2; //double
			}
			else
				return 1;
		}
		else if (numcard('A', 0) == 1 && numcard('7', 0)) {
			if (get_amount(dealer_hand) == 2 || get_amount(dealer_hand) == 7 || get_amount(dealer_hand) == 8) {
				return 3; //stand
			}
			else if (get_amount(dealer_hand) >= 3 && get_amount(dealer_hand) <= 6) {
				return 2; //double
			}
			else
				return 1;
		}
		else if (numcard('A', 0) == 1 && numcard('8', 0)) {
			return 3;
		}
		else if (numcard('A', 0) == 1 && numcard('9', 0)) {
			return 3;
		}
	}
}
