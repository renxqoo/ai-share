import os

def gen():
    with open(r'D:\work\ai-share\my-share.html', 'w', encoding='utf-8') as f:
        f.write('''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI</title>
</head>
<body><h1>test</h1></body>
</html>''')
    print('ok')

gen()