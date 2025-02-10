a=float(input("Price of first item:"))
b=float(input("Price of second item:"))
c=float(input("Price of third item:"))
sum=a+b+c
print("The total price is:",sum)
if (sum>50):
  dis=sum*10/100
  print("The discount on the item is:",dis)
  sum=sum-dis
print("The cost after discount is:",sum)