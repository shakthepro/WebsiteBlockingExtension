with open("list.txt", "r") as f:
    contents = f.readlines()
    with open("newfile.txt", "w") as ff:
        ff.write(str(contents))
        print("done")
 