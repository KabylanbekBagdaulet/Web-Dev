# Enter your code here. Read input from STDIN. Print output to STDOUT
q = int(input())
for i in range(q):
    n = int(input())
    a = set(map(int, input().split()))
    m = int(input())
    b = set(map(int, input().split()))
    print(a.issubset(b))
