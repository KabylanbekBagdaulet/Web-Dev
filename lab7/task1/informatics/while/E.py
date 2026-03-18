n = int(input())
d = 1
cnt = 0
while d < n:
    d += d
    cnt += 1
print(cnt)