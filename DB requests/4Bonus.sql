UPDATE "Users" SET balance=balance+10 
FROM (SELECT id FROM "Users" WHERE role="creator" and rating>0 
ORDER BY rating DESC LIMIT 3) AS "Best"
WHERE "Users".id="Best".id;