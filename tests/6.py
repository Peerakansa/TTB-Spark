encrypted = 'VTAOG'
k = 2

def simpleCipher(encrypted, k):
    decrypted = ''
    for char in encrypted:
        char_ascii = ord(char)
        char_offset = char_ascii - 65
        char_shifted = (char_offset - k) % 26
        shifted_ascii = char_shifted + 65
        decrypted_char = chr(shifted_ascii)
        decrypted += decrypted_char

    return decrypted

decrypted = simpleCipher(encrypted, k)
print(f"result: {decrypted}")
