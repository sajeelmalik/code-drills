# Algos

## Minion overall productivity

## Instructions

You are given an array containing data on all of your minions.

The minions have a strict hierarchy and varying levels of productivity. Furthermore, they each have a unique id.

The array contains a number of sub arrays, each containing data on a specific minion. The sub array is structured as such:
[1, 15, [2,4,5]]
- At index 0 of this array (1 in this case), is the minion's id.
- At index 1 of this array (15 in this case), is the minion's productivity level.
- At index 2 ([2,4,5] in this case), is an array of all the ids of the minion's subordinates.

In addition to being given data on all the minions, you are also given a number. This number represents the id of the minion in question.

Your job is to return the overall productivity points for the minion in question added to the sum of the productivity of all that minion's subordinates.

Remember to account for minions having minions!

You can assume that the chain of command for minions is structured such that a subordinate to a minion will never have that minion as its own subordinate whether directly or indirectly. For example, you will never receive a minion setup like [[1, 4, [2]], [2, 4, [3]], [3, 4, [1, 2]]] because the minions 1 and 3 are indirectly subordinate to each other and minions 2 and 3 are directly subordinate to each other.


## Example
Given ([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1), you should return 11.

We are given the number 1 in addition to the data. Upon finding the subarray whose 0 index is 1 (the first sub array in this case), we see that index 1 is 5. Next we see the ids of 2 and 3. Upon identifying the subarrays whose index 0 (the id) matches those numbers, we add their corresponding productivity points.

5 + 3 + 3 = 11.