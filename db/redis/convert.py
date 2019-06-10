import sys


file_name = sys.argv[1]
key_name = sys.argv[2]
proto = []
cmd = 'HMSET'
# arr = []
keys = []


def num_bytes(s):
    return len(s.encode('utf-8'))


with open(file_name, 'r') as f:
    for i, line in enumerate(f):
        if i == 0:
            keys = line.split(',')[1:]
        if i > 0:
            arr = line.split(',')
            key = f'{key_name}:{i}'
            arr = arr[1:]
            start = f"*{2+len(arr) + len(keys)}\r\n${num_bytes(cmd)}\r\n{cmd}\r\n${num_bytes(key)}\r\n{key}\r\n"
            middle = ''.join("${0}\r\n{1}\r\n${2}\r\n{3}\r\n".format(num_bytes(k.replace('\n', '').replace('\r', '')), k.replace('\n', '').replace('\r', ''),
                                                                     num_bytes(str(s).replace('\n', '').replace('\r', '')), s.replace('\n', '').replace('\r', '')) for s, k in zip(arr, keys))
            # end = f"${num_bytes('end')}\r\nend\r\n"
            proto.append("{0}{1}".format(start, middle))

sys.stdout.write('\r\n'.join(proto))
