import datetime

x = datetime.datetime.now()
with open("navprayas/lastModified.txt","w") as f:
    f.write(str(x.strftime("%c")))

with open("navprayas/lastModified.txt", "r+") as f:
    y = f.readline()
    print("reading y as ",y)

class lastModified:
    date = y

print(lastModified.date)
