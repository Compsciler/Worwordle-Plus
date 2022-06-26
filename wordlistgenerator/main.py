import random
from collections import defaultdict
from jsonfilelist import json_file_to_list, list_to_json_file

random.seed(0)

old_combined_word_list_json_file = 'constants/combinedwordlist.json'
old_word_list_json_file = 'constants/nytwordlist.json'
new_word_list_file = 'constants/wordlist.json'

old_valid_guesses_json_file = 'constants/oldvalidGuesses.json'
new_valid_guesses_file = 'constants/validGuesses.json'

prefix_freq, suffix_freq, word_freq = defaultdict(int), defaultdict(int), defaultdict(int)

def get_word_list(old_word_list):
    prefix_suffix_length = 3
    prefix_map, suffix_map = defaultdict(list), defaultdict(list)
    for word in old_word_list:
        prefix, suffix = word[:prefix_suffix_length], word[-prefix_suffix_length:]
        prefix_map[prefix].append(word)
        suffix_map[suffix].append(word)
    
    new_word_list = []
    
    # for prefix, words2 in prefix_map.items():
    #     for word1 in suffix_map[prefix]:
    #         for word2 in words2:
    #             word = word1 + word2[prefix_suffix_length:]
    #             new_word_list.append(word)
    for suffix, words1 in suffix_map.items():
        for word2 in prefix_map[suffix]:
            for word1 in words1:
                word = word1 + word2[prefix_suffix_length:]
                new_word_list.append(word)
                
                prefix_freq[word1] += 1
                suffix_freq[word2] += 1
                word_freq[word1] += 1
                word_freq[word2] += 1
    
    return new_word_list

def swap_word_into_list(word, index, word_list):
    if word in word_list:
        word_index_in_list = word_list.index(word)
        word_list[index], word_list[word_index_in_list] = word_list[word_index_in_list], word_list[index]
    else:
        word_list.append(word_list[index])
        word_list[index] = word     

old_combined_word_list = json_file_to_list(old_combined_word_list_json_file)
new_combined_word_list = get_word_list(old_combined_word_list)
random.shuffle(new_combined_word_list)

old_word_list = json_file_to_list(old_word_list_json_file)
new_word_list = get_word_list(old_word_list)
random.shuffle(new_word_list)

swap_index_start, swap_index_end = 150, 154
for i in range(swap_index_start, swap_index_end):
    swap_word_into_list(new_combined_word_list[i], i, new_word_list)

list_to_json_file(new_word_list, new_word_list_file)

# print(sorted(prefix_freq.items(), key=lambda kv: kv[1], reverse=True))
# print(sorted(suffix_freq.items(), key=lambda kv: kv[1], reverse=True))
# print(sorted(word_freq.items(), key=lambda kv: kv[1], reverse=True))
# print(sorted(word_freq.items(), key=lambda kv: prefix_freq[kv[0]] * suffix_freq[kv[0]], reverse=True))

old_valid_guesses = json_file_to_list(old_valid_guesses_json_file)
new_valid_guesses = get_word_list(old_valid_guesses)
new_valid_guesses.sort()
list_to_json_file(new_valid_guesses, new_valid_guesses_file)
