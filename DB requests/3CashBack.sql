UPDATE "Users" SET balance=balance+(Bal.sum/10)
FROM (SELECT "Users".id, sum(prize) FROM "Users"  
JOIN "Contests" ON "Users".id = "userId" WHERE 
"createdAt" BETWEEN '2021-12-25' AND '2022-01-14' 
GROUP BY "Users".id) AS Bal
WHERE "Users".id=Bal.id
