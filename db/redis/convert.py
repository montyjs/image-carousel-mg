import sys


file_name = sys.argv[1]
key_name = sys.argv[2]
proto = []
cmd = 'HMSET'
# arr = []


def num_bytes(s):
    return len(s.encode('utf-8'))


with open(file_name, 'r') as f:
    for i, line in enumerate(f):
        # print(line + '\n\n')
        if i > 0:
            arr = line.split(',')
            key = f'{key_name}:{i}'
            arr = arr[1:]
            arr_bytes = num_bytes(''.join(arr))
            proto.append(f"*{2+len(arr)}\r\n${num_bytes(cmd)}\r\n{cmd}\r\n${num_bytes(key)}\r\n{key}\r\n" +
                         ''.join(f"${num_bytes(str(s))}\r\n{s}\r\n" for s in arr))
            # arr.append(proto)
sys.stdout.write('\r\n'.join(proto))
# print((max(list(map(num_bytes, arr)))))
# print('\r\n'.join(proto))
