//1 hit, 2 bet, 3 stay
public int select_action() {
	//hard hand
	if (num_aces(my_hand) == 0) {
		if (get_ammount(my_hand) <= 8) {
			return 1;
		}
		else if (get_ammount(my_hand) == 9) {
			if (get_ammount(dealer_hand) >= 3 && get_ammount(dealer_hand) <= 6) {
				return 2; //double
			}
			else
				return 1;
		}
		else if (get_ammount(my_hand) == 10) {
			if (get_ammount(dealer_hand) >= 2 && get_ammount(dealer_hand) <= 9) {
				return 2; //double
			}
			else
				return 1;
		}
		else if (get_ammount(my_hand) == 11) {
			if (get_ammount(dealer_hand)) {
				return 1;
			}
			if (get_ammount(dealer_hand) >= 2 && get_ammount(dealer_hand) <= 10) {
				return 2; //double
			}
			else
				??//return 1;
		}
	}
}